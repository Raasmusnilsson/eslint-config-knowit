### Prettier - Set up config

1. Install the package

```
npm i @raasmusnilsson/prettier-config-knowit
```

2. Install the dependencies used by the package

```
npx install-peerdeps --dev @raasmusnilsson/prettier-config-knowit
```

3. Create .prettierrc and add following:

```
"@raasmusnilsson/prettier-config-knowit"
```

4. To enable Format on Save in your editor.  
   In the root of the project, add a folder named .vscode and create settings.json inside of it.  
   Add following inside settings.json

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}
```
