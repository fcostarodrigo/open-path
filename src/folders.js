const path = require("path");

const folders = (source, fileInPath) => {
  const list = [];

  if (!fileInPath) {
    list.push(path.join(path.dirname(source), path.basename(source)));
  }

  let original = source;
  let dirname = path.dirname(original);

  while (dirname !== original) {
    list.push(dirname);
    original = dirname;
    dirname = path.dirname(original);
  }

  return list.slice(0, -1).reverse();
};

module.exports = folders;
