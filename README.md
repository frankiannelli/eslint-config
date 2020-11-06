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

Browser TS config add this configuration to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "./node_modules/eslint-config/browser-ts.js"
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

## Publishing

`git tag v2.0.1`

`git push origin --tags`

go to git hub and release with the same version number
