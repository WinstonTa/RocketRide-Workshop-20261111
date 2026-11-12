# Diagram agent — production Vite build

Run: https://github.com/WinstonTa/RocketRide-Workshop-20261111/actions/runs/43155045088
Commit tested: 6d5cc945decca7d0a814bda82a61b3fd49c9b556

Node: v22.23.4
Yarn: 1.22.22

Command: yarn build:app
Exit: 0

~~~text
[log] [2mbuild/[22m[2massets/[22m[36mfirebaseSDK-BRg0yXND.js                                                      [39m[1m[2m  359.37 kB[22m[1m[22m[2m │ gzip:  87.73 kB[22m[2m │ map: 1,715.28 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36msubset-shared.chunk-D3ioWSie.js                                              [39m[1m[33m1,823.88 kB[39m[22m[2m │ gzip: 738.71 kB[22m[2m │ map: 1,983.48 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mindex-La2RbFEA.js                                                            [39m[1m[33m2,004.86 kB[39m[22m[2m │ gzip: 644.12 kB[22m[2m │ map: 9,141.09 kB[22m
[warn] [33m
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[warn] Browserslist: browsers data (caniuse-lite) is 21 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
[info] 
[36mPWA v0.21.1[39m
mode      [35mgenerateSW[39m
precache  [32m17 entries[39m [2m(2300.48 KiB)[22m
files generated
  [2mbuild/sw.js.map[22m
  [2mbuild/sw.js[22m
  [2mbuild/workbox-3631b453.js.map[22m
  [2mbuild/workbox-3631b453.js[22m
[log] [32m✓ built in 48.99s[39m
Done in 52.32s.
~~~
