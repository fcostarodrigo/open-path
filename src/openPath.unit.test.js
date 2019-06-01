const fs = require("fs");
const openPath = require("./openPath");

jest.mock("fs");

const mockMkDir = results => {
  for (const { dir: expectedDir, result } of results) {
    fs.mkdir.mockImplementationOnce((dir, callback) => {
      expect(dir).toBe(expectedDir);
      callback(result);
    });
  }
};

describe("openPath", () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it("should create folders recursively", async () => {
    const file = "a/b/c/d/e.f";

    mockMkDir([
      { dir: "a", result: null },
      { dir: "a/b", result: null },
      { dir: "a/b/c", result: null },
      { dir: "a/b/c/d", result: null },
      { dir: "a/b/c/d/e.f", result: null }
    ]);

    await openPath(file);
  });

  it("should use the last folder of a path", async () => {
    const folder = "a/b/c/d.e/";

    mockMkDir([
      { dir: "a", result: null },
      { dir: "a/b", result: null },
      { dir: "a/b/c", result: null },
      { dir: "a/b/c/d.e", result: null }
    ]);

    await openPath(folder);
  });

  it("should fail if there are files in place of folders", async () => {
    const file = "a/file/b/c.d";
    const error = { code: "ENOTDIR" };

    mockMkDir([
      { dir: "a", result: { code: "EEXIST" } },
      { dir: "a/file", result: error }
    ]);

    await expect(openPath(file)).rejects.toBe(error);
  });

  it("should work with callbacks", done => {
    const folder = "a/b.c/d/";

    mockMkDir([
      { dir: "a", result: null },
      { dir: "a/b.c", result: null },
      { dir: "a/b.c/d", result: null }
    ]);

    openPath(folder, false, done);
  });

  it("should pass errors to the callback", done => {
    const folder = "a/b.c";
    const error = new Error("error");

    mockMkDir([{ dir: "a", result: error }]);

    openPath(folder, true, err => {
      expect(err).toBe(error);
      done();
    });
  });
});
