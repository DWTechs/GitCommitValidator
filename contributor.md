# Installation guide

- Install Git : [https://git-scm.com/](https://git-scm.com/)

- Install Node.js : [https://nodejs.org](https://nodejs.org)

- Clone the project :

  ```bash
  $ git clone https://github.com/DWTechs/GitCommitValidator
  ```

- Install project dependencies :

  ```bash
  $ cd <project-directory>
  $ npm i
  ```

# Workflow

- Edit the message in ./tests/COMMIT_EDITMSG following [these instructions](https://dwtechs.github.io/efficient-git/branch/)

- run the library :

  ```bash
  $ node ./bin --src "./tests/COMMIT_EDITMSG"
  ```

- test the library :

  ```bash
  $ npm run test
  ```

- commit your work following [those simplified conventional commits rules](https://dwtechs.github.io/efficient-git/conventional-commit/) :

## Docker

## Launch with docker
 
### build image : 
```bash
$ cd GitCommitValidator/
$ docker-compose up -d
```

### test lib : 
```bash
$ cd GitCommitValidator/
$ docker-compose run gitcommitvalidator
```


## Folders

- bin/
- lib/
- tests/

## Stack

| Purpose         |                Choice                |                                        Motivation                                         |
| :-------------- | :----------------------------------: | :---------------------------------------------------------------------------------------: |
| repository      |    [Github](https://github.com/)     | the world’s largest community of developers to discover, share, and build better software |
| package manager | [npm](https://www.npmjs.com/get-npm) |                              default node.js package manager                              |
| unit testing    |      [Jest](https://jestjs.io/)      |                       delightful testing with a focus on simplicity                       |
