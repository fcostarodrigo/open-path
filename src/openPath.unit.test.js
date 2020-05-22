const path = require("path");
const openPath = require("./openPath");

const mkdirIgnoreExist = /** @type {jest.Mock} */ (require("./mkdirIgnoreExist"));

jest.mock("./mkdirIgnoreExist");

describe("openPath", () => {
  it("should propagate folder creation errors", () => {
    const file = path.join("a", "file", "b", "c.d");
    const error = new Error();
    mkdirIgnoreExist.mockRejectedValueOnce(error);

    return expect(openPath(file, false)).rejects.toBe(error);
  });
});
