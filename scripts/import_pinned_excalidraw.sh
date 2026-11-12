#!/usr/bin/env bash
# One-time, pinned, non-force-pushing Excalidraw root import.
# Run only from the approved workshop repository's clean main checkout.
set -Eeuo pipefail
PHASE="initial preflight"
trap 'code=$?; printf "phase=%s\nline=%s\nexit=%s\n" "$PHASE" "$LINENO" "$code" > "${RUNNER_TEMP:-/tmp}/rocketride-import-failure.txt"; echo "Root import failed in phase: $PHASE, line $LINENO, exit $code" >&2' ERR

PINNED="701b901a0f1ba3d0b390d9cdf63d112e25abac4b"
UPSTREAM_URL="https://github.com/excalidraw/excalidraw.git"
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

echo "Inspecting local checkout and remote main before import"
test "$(git branch --show-current)" = "main"
test -z "$(git status --porcelain)"
git fetch --no-tags origin main
test "$(git rev-parse HEAD)" = "$(git rev-parse refs/remotes/origin/main)"
test "$(git ls-files -s -- excalidraw | awk '{print $1 " " $2}')" = "160000 $PINNED"
test ! -e package.json
test ! -e yarn.lock
test ! -e excalidraw-app
test -f pipelines/diagram-agent.pipe
test -f scripts/import_pinned_excalidraw.sh
test -f .github/workflows/import-pinned-excalidraw.yml

PHASE="fetch upstream git history"
echo "Fetching pinned upstream Excalidraw commit with its history"
if git remote get-url rocketride-upstream >/dev/null 2>&1; then
  test "$(git remote get-url rocketride-upstream)" = "$UPSTREAM_URL"
else
  git remote add rocketride-upstream "$UPSTREAM_URL"
fi
# A full-history fetch makes the upstream commit available as an actual second
# parent of the import merge, rather than merely citing a commit in a message.
git fetch --no-tags rocketride-upstream "$PINNED"
git cat-file -e "$PINNED^{commit}"
git cat-file -e "$PINNED^{tree}"

PHASE="extract upstream snapshot"
staging="$(mktemp -d)"
trap 'rm -rf "$staging"' EXIT
git archive "$PINNED" | tar -xf - -C "$staging"

test -f "$staging/package.json"
test -f "$staging/yarn.lock"
test -f "$staging/LICENSE"
test -d "$staging/excalidraw-app"
test -d "$staging/packages/excalidraw"
test ! -e "$staging/pipelines/diagram-agent.pipe"
test ! -e "$staging/scripts/import_pinned_excalidraw.sh"
test ! -e "$staging/.github/workflows/import-pinned-excalidraw.yml"

PHASE="merge upstream commit ancestry"
echo "Recording upstream ancestry without rewriting workshop history"
# Git needs the bot identity for preparing a merge even with --no-commit.
git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git merge --allow-unrelated-histories --no-ff --no-commit -s ours "$PINNED"

PHASE="import source and remove gitlink"
echo "Replacing the tracked gitlink with the pinned source snapshot"
git rm -- excalidraw
if test -d excalidraw; then
  test -z "$(find excalidraw -mindepth 1 -maxdepth 1 -print -quit)"
  rmdir excalidraw
fi

# Keep the dedicated, narrowly scoped workshop import workflow; do not import
# the upstream repo's GitHub Actions workflows into a separate private repo.
rsync -a --exclude='/.gitignore' --exclude='/.github/workflows/' "$staging/" ./
{
  cat "$staging/.gitignore"
  printf '\n# RocketRide workshop secrets and local state\n.rocketride/\n.env\n'
} > .gitignore

PHASE="validate imported source files"
echo "Checking required source paths, pipeline, and upstream license"
test -f package.json
test -f yarn.lock
test -f LICENSE
test -f excalidraw-app/components/AppSidebar.tsx
test -f excalidraw-app/components/AI.tsx
test -d packages/excalidraw
test -f pipelines/diagram-agent.pipe
test "$(git hash-object pipelines/diagram-agent.pipe)" = "$(git rev-parse HEAD:pipelines/diagram-agent.pipe)"
test "$(git hash-object excalidraw-app/components/AI.tsx)" = "$(git rev-parse "$PINNED:excalidraw-app/components/AI.tsx")"
python3 -m json.tool pipelines/diagram-agent.pipe >/dev/null
python3 -m json.tool package.json >/dev/null
python3 -m json.tool excalidraw-app/package.json >/dev/null

PHASE="stage and check Git diff"
git add -A
test -z "$(git ls-files -- excalidraw)"
if git diff --cached --name-only | grep -Eq '^(pipelines/|\.env$|\.rocketride/)'; then
  echo "Refusing unexpected changes to pipeline or secrets paths" >&2
  exit 1
fi
echo "Staged file change summary:"
git diff --cached --stat | tail -12
# Imported upstream files can contain pre-existing whitespace; do not rewrite
# upstream blobs merely to satisfy a whitespace-only warning.
if ! git diff --cached --check; then
  echo "WARNING: upstream snapshot has whitespace warnings; inspect pinned source before attributing to workshop changes." >&2
fi

PHASE="commit Git merge"
git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git commit -m "chore/repository: import pinned Excalidraw source at workshop root" \
  -m "Merge the pinned upstream source as second parent, retain RocketRide pipeline and upstream MIT license. Exclude upstream CI workflows; preserve workshop history."
echo "New merge commit parents: $(git rev-list --parents -n 1 HEAD)"
test "$(git rev-list --parents -n 1 HEAD | awk '{print $3}')" = "$PINNED"

PHASE="push and verify remote main"
echo "Pushing commit to main without force (a concurrent update will reject)"
git push origin HEAD:refs/heads/main
pushed="$(git ls-remote origin refs/heads/main | awk '{print $1}')"
test "$pushed" = "$(git rev-parse HEAD)"
echo "Verified remote main SHA: $pushed"
