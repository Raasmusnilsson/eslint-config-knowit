### ESLint - Set up config

1. Install the package

```
npm install @raasmusnilsson/eslint-config-knowit
```

2.  Install the dependencies used by the package

```
npx install-peerdeps --dev @raasmusnilsson/eslint-config-knowit
```

3.  Create .eslintrc.js and add following:

```
module.exports = {
 extends: ['@raasmusnilsson/eslint-config-knowit'],
}
```
