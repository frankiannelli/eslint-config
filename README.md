# Franks linting rules

To use this module, you must add it as a dependency in your project's `package.json` file:

Specify the tagged version of the config to install

`yarn add frankiannelli/eslint-config.git#v1.0.0 --dev`

```json
{
  "devDependencies": {
    "frankiannelli/eslint-config.git#v1.0.0"
  }
}
```

Browser config add this configuration to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "./node_modules/eslint-config/browser.js"
  }
}
```

Server config add this configuration to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "./node_modules/eslint-config/server.js"
  }
}
```
