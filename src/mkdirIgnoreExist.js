const fs = require("fs");

async function mkdirIgnoreExist(folder) {
  try {
    await fs.promises.mkdir(folder);
  } catch (error) {
    if (error.code !== "EEXIST") {
      throw error;
    }
  }
}

module.exports = mkdirIgnoreExist;
