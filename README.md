
[![License: MIT](https://img.shields.io/npm/l/@dwtechs/gitcommitvalidator.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40dwtechs%2Fgitcommitvalidator.svg)](https://www.npmjs.com/package/@dwtechs/gitcommitvalidator)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)

- [Synopsis](#synopsis)
- [Motivation](#motivation)
- [Installation](#installation)
  - [npm](#npm)
  - [Yarn](#yarn)
  - [Local](#local)
- [Usage](#usage)
  - [Command line](#command-line)
  - [Patterns](#patterns)
  - [Message](#message)
  - [Prompt](#prompt)
  - [Help](#help)
  - [Workflow integration](#workflow-integration)
- [Contributors](#contributors)
- [License](#license)
- [Stack](#stack)
- [Dependencies](#dependencies)

## Synopsis

**[GitCommitValidator](https://github.com/DWTechs/GitCommitValidator)** is an open source git commit message validator library.

## Motivation

The goal of this library is to provide an easy way to check if the current commit message is valid before pushing it to the remote.

It's a good way to help developers keep their commit messages clean on the repository and facilitate the workflow of a project with strict naming rules.

The default pattern follows the principles described [here](https://dwtechs.github.io/efficient-git/conventional-commit/).

You can also set your own rules using [custom patterns](#patterns).

## Installation

### npm

```bash
$ npm i @dwtechs/gitcommitvalidator -g
```

### Yarn

```bash
$ yarn add @dwtechs/gitcommitvalidator -g
```

### Locally

Alternatively, if you are planning to use GitCommitValidator within your npm package only or with npx you can install it as a devDependency in your project.

```bash
$ npm i @dwtechs/gitcommitvalidator --save-dev
```

```bash
$ yarn add @dwtechs/gitcommitvalidator --dev
```

## Usage

### Command line

```bash
$ cd <git-project>
$ gbvalidator
```

Alternatively if you did not install GitCommitValidator globally you can use npx.

```bash
$ npx gbvalidator
```

Or as an npm script in your package.json.

```json
{
  "scripts": {
    "commit": "gcvalidator"
  }
}
```

### Patterns

- Default : **^(feat|fix|test|doc)\/[A-Z0-9\-\#]{2,25}\/([a-z0-9_\-\.]){3,40}$**
- Release : **^release\/v[a-z0-9\+\-\.]{3,25}$**

The patterns follow the principles described [here](https://dwtechs.github.io/efficient-git/conventional-commit/).

You can use your own custom patterns by adding an optional regexp :

```bash
$ cd <git-project>
$ gcvalidator --patterns "^(feat|fix)\/([a-z0-9_#-\.\/]){3,50}$"
```

_If you use this option for a npm command in package.json, you may need to properly escape your regex in order to get a valid JSON file._


You can use several patterns if needed : 

```bash
$ cd <git-project>
$ gcvalidator --patterns "pattern1" "pattern2" "pattern3"
```

If one of them is valid, the commit message will be valid.


### Message

You can customize the end of the error message :

```bash
$ cd <git-project>
$ gcvalidator --message "You can learn more about commit message conventions of this project on https://dwtechs.github.io/efficient-git/conventional-commit/"
```

### Prompt

If the commit message is not valid, the process will be blocked by default.
You can use the option "--continue" to prompt the user instead.

```bash
$ cd <git-project>
$ gcvalidator --continue
```

In this case the user will be prompted about the invalid commit. He will be able to keep going if he choose so.

### Help

You can access the documentation by passing the "help" parameter :

```bash
$ cd <git-project>
$ gcvalidator --help
```


### Workflow integration

Validate commit message on pre-commit with Husky :

```bash
$ npm install husky --save-dev
```

In the package.json file :

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "gcvalidator"
    }
  }
}
```

You can do it with any other tool, or work on Git pre commit hook directly.

## options

| Option       | Alias |  Type   |                                                                      description |
| :----------  | :---: | :-----: | -------------------------------------------------------------------------------: |
| --patterns   |  -p   | string  |                               Use a custom regex. You can send multiple patterns |
| --message    |  -m   | string  |                             Add a custom message at the end of the error message |
| --continue   |  -c   | string  | Prompt the user if the branch name is not valid, instead of stopping the process |
| --help       |  -h   | boolean |                                                        Learn about library usage |

## Contributors

GitCommitValidator is still in development and I would be glad to get all the help you can provide for this project.
To contribute please read **[NOTICE.md](https://github.com/DWTechs/GitCommitValidator/blob/master/NOTICE.md)** for detailed installation guide.

## License

**[MIT](https://github.com/DWTechs/GitCommitValidator/blob/master/LICENSE)**

## Stack

| Purpose         |                Choice                |                                                 Motivation |
| :-------------- | :----------------------------------: | ---------------------------------------------------------: |
| repository      |    [Github](https://github.com/)     | hosting for software development version control using Git |
| package manager | [npm](https://www.npmjs.com/get-npm) |                            default node.js package manager |
| unit testing    |      [Jest](https://jestjs.io/)      |              delightful testing with a focus on simplicity |

## Dependencies

| Name | version |
| :--- | :----- |
| @dwtechs/checkhard | 2.19.0 |
| command-line-args  | 5.2.1 |
| command-line-usage | 6.1.3 |
| current-git-branch | 1.1.0 |
| prompts            | 2.4.2 |