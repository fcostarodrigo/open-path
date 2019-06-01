const fs = require("fs");
const util = require("util");
const openPath = require("../.");

const writeFile = util.promisify(fs.writeFile);
const rmdir = util.promisify(fs.rmdir);
const unlink = util.promisify(fs.unlink);

describe("openPath", () => {
  it("should open a path", async () => {
    const file = "tests/a/b/c/d.e";
    await openPath(file, true);
    await writeFile(file, "hello");
    await unlink(file);
    await rmdir("tests/a/b/c/");
    await rmdir("tests/a/b/");
    await rmdir("tests/a/");
  });
});
