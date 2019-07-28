#!/usr/bin/env node

const yargs = require("yargs");
const openPath = require("./index");

const builder = command =>
  command
    .positional("pathToOpen", {
      describe: "String with the path",
      type: "string",
    })
    .option("fileInPath", {
      alias: "f",
      describe: "Indicates if the last item of the path is a file",
      defaults: false,
      type: "boolean",
    });

const handler = ({ pathToOpen, fileInPath }) =>
  openPath(pathToOpen, fileInPath).catch(error =>
    process.stdout.write(`${error}\n`),
  );

yargs.command("* <pathToOpen>", false, builder, handler).parse();
