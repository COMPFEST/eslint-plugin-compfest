# eslint-plugin-compfest

COMPFEST es-lint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-compfest`:

```
$ npm install eslint-plugin-compfest --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-compfest` globally.

## Usage

Add `compfest` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "compfest"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "compfest/compfest-uppercase": 2
    }
}
```

## Supported Rules

- [compfest/compfest-uppercase](https://github.com/COMPFEST/eslint-plugin-compfest/blob/HEAD/docs/rules/compfest-uppercase.md): COMPFEST. Not CompFest, not Compfest and definitely not comfest.






