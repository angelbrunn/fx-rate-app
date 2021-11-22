# SWF-PWA

This is a base architecture that covers the main technical aspects of software engineering.

## Installation

1. Install vscode

2. Install node v12.x (recommended)
   `nvm instal 12.18.0`

3. Install dependencies
   `npm install`

4. Run project on develop mode
   `npm run start`

## Use

(This is a bean proyect) in progress . . . 

## Build

A. `npm run build`

Output folder: _dist/_

### Conventions

Look at [conventions.md](./conventions.md)

### Changelog

Look at [changelog.md](./changelog.md)

### Resources Links

[React](https://reactjs.org/)
[React Boostrap](https://react-bootstrap.github.io/getting-started/introduction/)
[Jest Expect API](https://jestjs.io/docs/en/expect)
[Testing Library API](https://testing-library.com/)
[k6](https://k6.io/)
[Fixer](https://fixer.io/documentation#basecurrency)

## Miscellaneous

In this file [.gitignore](./gitignore) are configure with git repo!

### Recommended dev tooling extensions

ESLint
GitLens
GitHistory
Prettier - Code formatter
stylelint
vscode-icons

##### React Developer Tools

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

### Recommended IDE extensions

[VSCode](https://code.visualstudio.com/)

#### VS Code

1. [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
2. [TypeScript TSLint Plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

#### Create heroku app

0. install heroku cli (previusly)

1. heroku create -b https://github.com/mars/create-react-app-buildpack.git nameHerokuApp

2. git push heroku master

**Note:** To be able to deploy well within heroku you need to have a file with the name "static.json" in the path of the fileytem. This is used by [buildpack] (https://github.com/mars/create-react-app-buildpack.git).
