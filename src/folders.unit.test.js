const path = require("path");
const folders = require("./folders");

describe("folders", () => {
  it("should list folders", () => {
    const folderPath = path.join("a", "b", "c");
    const folderPaths = ["a", path.join("a", "b"), path.join("a", "b", "c")];

    expect(folders(folderPath)).toEqual(folderPaths);
  });

  it("should return a single folder when passed a single folder", () => {
    const folderPath = "a";
    const folderPaths = ["a"];

    expect(folders(folderPath)).toEqual(folderPaths);
  });

  it("should normalize", () => {
    const folderPath = path.join("a", "b", "c", "d.e") + path.sep;
    const folderPaths = [
      "a",
      path.join("a", "b"),
      path.join("a", "b", "c"),
      path.join("a", "b", "c", "d.e"),
    ];

    expect(folders(folderPath)).toEqual(folderPaths);
  });

  it("should include last item", () => {
    const folderPath = path.join("a", "b", "c.d");
    const folderPaths = ["a", path.join("a", "b"), path.join("a", "b", "c.d")];

    expect(folders(folderPath)).toEqual(folderPaths);
  });

  it("should ignore last item", () => {
    const folderPath = path.join("a", "b", "c");
    const folderPaths = ["a", path.join("a", "b")];

    expect(folders(folderPath, true)).toEqual(folderPaths);
  });

  it("should list folders named with a dot", () => {
    const folderPath = path.join("a", "b.c", "d.e", "f");
    const folderPaths = [
      "a",
      path.join("a", "b.c"),
      path.join("a", "b.c", "d.e"),
      path.join("a", "b.c", "d.e", "f"),
    ];

    expect(folders(folderPath)).toEqual(folderPaths);
  });
});
