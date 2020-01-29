# Stock Edge Club

This is a social media for stock market wizards.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js > v10.0 and npm or yarn installed to run this app from your pc.

### Installing the required modules

Install the npm modules by typing the following command:

```bash
yarn
```

or

```bash
npm install
```

Next install commitizen globally by running the following command:

```bash
yarn global add commitizen
```

or

```bash
npm install -g commitizen
```

### Dependency installation

The repository contains three packages namely:

1. app
2. common
3. web

To install a dependency under a particular package, either go to the directory and install the dependency, or run the following command from root:

```bash
yarn workspace <package-name> add <dependency-name>
```

### Commit Process

1. Stage all files by running: `git add .` or individually by running `git add <filename>`.
2. Commit the file by running `git cz` and going through the flow.

### Release Process

Run the following command to release a build:

```bash
yarn run release
```

or

```bash
npm run release
```

## Built With

- Lerna
- React Native
- React Native Web
