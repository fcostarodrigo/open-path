const folders = require("./folders");
const mkdirIgnoreExist = require("./mkdirIgnoreExist");

/**
 * Creates missing folders in the middle of a path
 *
 * @param {string} pathToOpen
 * @param {boolean} fileInPath
 */
async function openPath(pathToOpen, fileInPath = false) {
  for (const folder of folders(pathToOpen, fileInPath)) {
    await mkdirIgnoreExist(folder);
  }
}

module.exports = openPath;
