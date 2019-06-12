const path = require("path");

const normalize = source =>
  path.join(path.dirname(source), path.basename(source));

const folders = (source, fileInPath = false) => {
  const list = [fileInPath ? path.dirname(source) : normalize(source)];

  while (list[0] !== path.dirname(list[0])) {
    list.unshift(path.dirname(list[0]));
  }

  return list.slice(1);
};

module.exports = folders;
