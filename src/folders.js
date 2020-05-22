const path = require("path");

function normalize(source) {
  return path.join(path.dirname(source), path.basename(source));
}

function folders(source, fileInPath = false) {
  const list = [fileInPath ? path.dirname(source) : normalize(source)];

  while (list[0] !== path.dirname(list[0])) {
    list.unshift(path.dirname(list[0]));
  }

  return list.slice(1);
}

module.exports = folders;
