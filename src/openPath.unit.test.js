const path = require("path");
const openPath = require("./openPath");
const mkdirIgnoreExist = require("./mkdirIgnoreExist");

const mockMkdirIgnoreExist = /** @type {jest.MockedFunction<typeof mkdirIgnoreExist>} */ (mkdirIgnoreExist);

jest.mock("./mkdirIgnoreExist");

describe("openPath", () => {
  it("should propagate folder creation errors", () => {
    const file = path.join("a", "file", "b", "c.d");
    const error = new Error();
    mockMkdirIgnoreExist.mockRejectedValueOnce(error);

    return expect(openPath(file, false)).rejects.toBe(error);
  });
});
