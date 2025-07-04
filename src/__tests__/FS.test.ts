import * as FS from "../FS";
import path from "path";
describe("FS module", () => {
  it("should add slash to end of path if missing", () => {
    const sep = path.sep;
    const input = "C:" + sep + "test";
    const expected = input + sep;
    expect(FS.withEndSlash(input)).toBe(expected);
    expect(FS.withEndSlash(input + sep)).toBe(input + sep);
  });
  // Add more tests for fileExists, readDirectory, etc. with mocks if needed
});
