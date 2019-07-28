const folders = require("./folders");
const mkdirExist = require("./mkdirExist");

/**
 * Creates missing folders in the middle of a path
 *
 * @param {string} pathToOpen
 * @param {boolean} fileInPath
 */
const openPath = async (pathToOpen, fileInPath = false) => {
  for (const folder of folders(pathToOpen, fileInPath)) {
    await mkdirExist(folder);
  }
};

module.exports = openPath;
