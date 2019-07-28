const fs = require("fs");
const util = require("util");
const folders = require("./folders");

const mkdir = util.promisify(fs.mkdir);

const openPath = async (pathToOpen, fileInPath) => {
  const ignoreExistError = error =>
    error.code === "EEXIST" ? Promise.resolve() : Promise.reject(error);

  for (const folder of folders(pathToOpen, fileInPath)) {
    await mkdir(folder).catch(ignoreExistError);
  }
};

module.exports = openPath;
