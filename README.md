# Schematics Starter with Sandbox

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM. More info on this sandbox approach is detailed in this blog post [kevinschuchard.com/blog/2018-11-20-schematic-sandbox/](https://www.kevinschuchard.com/blog/2018-11-20-schematic-sandbox/)

## Getting started

⬇ **Install** the dependencies for the schematic and the sandbox application

```bash
npm install && cd sandbox && npm install && cd ..
```

🖇 **Link** the schematic in the sandbox to run locally

```bash
npm run link:schematic
```

🏃 **Run** the schematic

```bash
npm run build:clean:launch
# or
npm test
```

To execute an example schematic, make sure you've ran the **Install** and **Link** steps above. Then run the following and inspect the changed files.

```bash
git checkout component-license && npm run build:clean:launch
```

## E2E testing

Execute the schematic against the sandbox. Then run linting, unit & e2e tests and a prod build in the sandbox.

```bash
npm run test
```

## Unit Testing

Run the unit tests using Jasmine as a runner and test framework.

```bash
npm run test:unit
```

## Reset the sandbox

Running the schematic locally makes file system changes. The sandbox is version controlled so that viewing a diff of the changes is trivial. After the schematic has run locally, reset the sandbox with the following.

```bash
npm run clean
```

_Note: if you're using the `schematics` CLI mentioned below, you can execute the schematic in a dry run mode._

## Change the Schematic name

1. do a global search and replace for `schematic-starter` and `schematicStarter` with the new name.
2. change the folder name from `./src/schematic-starter/...` to `./src/NEW_NAME/...`
3. run `npm run link:schematic` to set up local package linking for the sandbox

## Optional - Testing with the Schematics CLI

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

## Publishing

The `publish` package.json script is setup to build the schematic. Additional testing scripts could be added to ensure stable releases.

Before publishing:

- change the package.json `name` value
- if using a scope package name (`@username/package-name`), ensure the following is in your package.json.

```json
{
    "name": "@username/package-name",
    "publishConfig": {
        "access": "public"
    },
}
```