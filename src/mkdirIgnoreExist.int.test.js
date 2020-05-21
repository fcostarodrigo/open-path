const fs = require("fs");
const path = require("path");
const mkdirIgnoreExist = require("./mkdirIgnoreExist");

describe("mkdirIgnoreExist", () => {
  afterEach(async () => {
    await fs.promises.rmdir("b").catch(() => {});
    await fs.promises.unlink("b").catch(() => {});
  });

  it("should create a folder", () => {
    return expect(mkdirIgnoreExist("b")).resolves.toBe(undefined);
  });

  it("should not fail when the folder already exists", async () => {
    await expect(mkdirIgnoreExist("b")).resolves.toBe(undefined);
    await expect(mkdirIgnoreExist("b")).resolves.toBe(undefined);
  });

  it("should fail if it is not possible to create the folder", async () => {
    await fs.promises.writeFile("b", "test");
    await expect(mkdirIgnoreExist(path.join("b", "b"))).rejects.toThrow();
  });
});
