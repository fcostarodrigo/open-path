const fs = require("fs");
const util = require("util");
const mkdirExist = require("./mkdirExist");

const rmdir = util.promisify(fs.rmdir);
const writeFile = util.promisify(fs.writeFile);
const unlink = util.promisify(fs.unlink);

describe("mkdirExist", () => {
  it("should create a folder", async () => {
    await mkdirExist("b");
    await rmdir("b");
  });

  it("should not fail when the folder already exists", async () => {
    await mkdirExist("b");
    await mkdirExist("b");
    await rmdir("b");
  });

  it("should fail if it is not possible to create the folder", async () => {
    await writeFile("b", "test");
    await expect(mkdirExist("b/b")).rejects.toThrow();
    await unlink("b");
  });
});
