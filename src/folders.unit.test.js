const folders = require("./folders");

describe("folders", () => {
  it("should return a single folder when passed a single folder", () => {
    expect(folders("a")).toEqual(["a"]);
  });

  it("should list relative folders", () => {
    expect(folders("a/b/c")).toEqual(["a", "a/b", "a/b/c"]);
  });

  it("should normalize its input", () => {
    expect(folders("a/b/c/d.e/")).toEqual(["a", "a/b", "a/b/c", "a/b/c/d.e"]);
  });

  it("should include last item by default", () => {
    expect(folders("a/b/c.d")).toEqual(["a", "a/b", "a/b/c.d"]);
  });

  it("should ignore last item with argument", () => {
    expect(folders("a/b/c/", true)).toEqual(["a", "a/b"]);
  });

  it("should list absolute paths", () => {
    expect(folders("/a/b/c/", true)).toEqual(["/a", "/a/b"]);
  });

  it("should list folders named with a dot", () => {
    expect(folders("a/b.c/d.e/f")).toEqual([
      "a",
      "a/b.c",
      "a/b.c/d.e",
      "a/b.c/d.e/f"
    ]);
  });
});
