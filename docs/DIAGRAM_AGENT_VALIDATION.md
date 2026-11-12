# Diagram agent validation — GitHub Actions

Run: https://github.com/WinstonTa/RocketRide-Workshop-20261111/actions/runs/43154058414
Revision tested: b1684447371cb6214f9713fe75afb3dfbaacd80d
SDK: rocketride 1.6.0
Node: v22.23.4
Yarn: 1.22.22

## prettier (exit 0)

~~~text
Checking formatting...
All matched files use Prettier code style!
~~~

## tsc (exit 0)

~~~text
~~~

## eslint (exit 1)

~~~text

/home/runner/work/RocketRide-Workshop-20261111/RocketRide-Workshop-20261111/excalidraw-app/components/DiagramAgentPanel.tsx
   1:1  warning  `./DiagramAgentPanel.scss` import should occur after type import of `@excalidraw/excalidraw/components/TTDDialog/types`  import/order
  12:1  warning  `../app-jotai` import should occur after type import of `@excalidraw/excalidraw/components/TTDDialog/types`              import/order
  14:1  warning  `./diagramAgent` import should occur after type import of `@excalidraw/excalidraw/components/TTDDialog/types`            import/order

/home/runner/work/RocketRide-Workshop-20261111/RocketRide-Workshop-20261111/excalidraw-app/components/diagramAgent.ts
  115:28  warning  Unexpected string concatenation  prefer-template
  147:27  warning  Unexpected string concatenation  prefer-template
  156:25  warning  Unexpected string concatenation  prefer-template

✖ 6 problems (0 errors, 6 warnings)
  0 errors and 5 warnings potentially fixable with the `--fix` option.

ESLint found too many warnings (maximum: 0).
~~~

