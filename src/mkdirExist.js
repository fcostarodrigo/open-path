const fs = require("fs");
const util = require("util");

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

module.exports = mkdirExist;
