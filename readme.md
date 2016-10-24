# testing karma rollup tape

```bash
npm install
npm run build # browserify tape to build/tape.js
npm test # run karma
```

### Current issue:

- tap output seems to not run through tap-spec
- other than that looks pretty good now.

### related
- rollup can not bundle tape https://github.com/rollup/rollup/issues/1072
- karma tape rollup karma-tap setup https://github.com/bySabi/karma-tap/issues/23
