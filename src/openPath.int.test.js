const fs = require("fs");
const path = require("path");
const openPath = require("./openPath");

describe("openPath", () => {
  afterAll(async () => {
    await fs.promises.unlink(path.join("a", "b", "c", "d.e")).catch(() => {});
    await fs.promises.rmdir(path.join("a", "b", "c")).catch(() => {});
    await fs.promises.rmdir(path.join("a", "b")).catch(() => {});
    await fs.promises.rmdir("a").catch(() => {});
  });

  it("should open a path", async () => {
    const file = path.join("a", "b", "c", "d.e");
    await openPath(file, true);
    await expect(fs.promises.writeFile(file, "hello")).resolves.toBe(undefined);
  });
});
