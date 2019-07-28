const mkdirExist = require("./mkdirExist");
const openPath = require("./openPath");

jest.mock("./mkdirExist");

describe("openPath", () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it("should create folders recursively", async () => {
    mkdirExist.mockResolvedValue(null);

    await openPath("a/b/c/d/e.f");

    expect(mkdirExist.mock.calls).toEqual([
      ["a"],
      ["a/b"],
      ["a/b/c"],
      ["a/b/c/d"],
      ["a/b/c/d/e.f"],
    ]);
  });

  it("should propagate folder creation errors", async () => {
    const error = new Error();
    mkdirExist.mockRejectedValue(error);
    await expect(openPath("a/file/b/c.d")).rejects.toBe(error);
  });
});
