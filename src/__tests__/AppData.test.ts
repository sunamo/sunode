import * as AppData from "../AppData";
describe("AppData", () => {
  it("getFileTxt returns correct path", () => {
    expect(AppData.getFileTxt("Data", "test")).toBe(
      "D:/OneDrive/sunamo/ConsoleApp1/Data/test.txt"
    );
  });
});
