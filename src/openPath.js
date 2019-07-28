const fs = require("fs");
const util = require("util");
const folders = require("./folders");

const mkdir = util.promisify(fs.mkdir);

const mkdirExist = async folder => {
  try {
    await mkdir(folder);
  } catch (error) {
    if (error.code !== "EEXIST") {
      throw error;
    }
  }
};

const openPath = async (pathToOpen, fileInPath) => {
  for (const folder of folders(pathToOpen, fileInPath)) {
    await mkdirExist(folder);
  }
};

module.exports = openPath;
