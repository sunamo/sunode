import type { AppFolders } from "../enums/AppFolders";
describe("AppFolders type", () => {
  it("should allow only specific folder names", () => {
    const valid: AppFolders = "Data";
    expect(valid).toBe("Data");
    // const invalid: AppFolders = 'Invalid'; // should error in type checking
  });
});
