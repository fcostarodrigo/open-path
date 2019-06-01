const fs = require("fs");
const util = require("util");
const folders = require("./folders");

const mkdir = util.promisify(fs.mkdir);

const openPathCore = async (pathToOpen, fileInPath) => {
  const ignoreExistError = error => {
    if (error.code === "EEXIST") return Promise.resolve();
    return Promise.reject(error);
  };

  for (const folder of folders(pathToOpen, fileInPath)) {
    await mkdir(folder).catch(ignoreExistError);
  }
};

const openPath = async (pathToOpen, fileInPath, callback) => {
  const promise = openPathCore(pathToOpen, fileInPath);
  if (callback) return promise.then(callback).catch(callback);
  return promise;
};

module.exports = openPath;
