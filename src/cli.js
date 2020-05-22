#!/usr/bin/env node
/* eslint-disable no-console */

const yargs = require("yargs");
const openPath = require("./openPath");

function builder(command) {
  return command
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
}

async function handler({ pathToOpen, fileInPath }) {
  try {
    await openPath(pathToOpen, fileInPath);
  } catch (error) {
    console.error(error);
  }
}

yargs.command("* <pathToOpen>", false, builder, handler).parse();
