// Mock fs/promises and path modules before importing
jest.mock("fs/promises", () => ({
  writeFile: jest.fn(),
  mkdir: jest.fn(),
}));

jest.mock("path", () => ({
  dirname: jest.fn(),
}));

import { writeAllLines } from "../TF";

// Get the mocked functions
const mockWriteFile = jest.mocked(require("fs/promises").writeFile);
const mockMkdir = jest.mocked(require("fs/promises").mkdir);
const mockDirname = jest.mocked(require("path").dirname);

describe("writeAllLines", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("writes all lines to a file", async () => {
    console.log("writeAllLines test start");

    const log = {
      error: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
    };

    const filePath = "/test/path/testfile.txt";
    const lines = ["a", "b", "c"];

    // Mock dirname to return the directory path
    mockDirname.mockReturnValue("/test/path");

    // Mock successful mkdir and writeFile
    mockMkdir.mockResolvedValue(undefined);
    mockWriteFile.mockResolvedValue(undefined);

    console.log("writeAllLines test call");

    await writeAllLines(log, filePath, lines);

    // Verify dirname was called with correct file path
    expect(mockDirname).toHaveBeenCalledWith(filePath);

    // Verify mkdir was called with correct directory
    expect(mockMkdir).toHaveBeenCalledWith("/test/path", { recursive: true });

    // Verify writeFile was called with correct parameters
    expect(mockWriteFile).toHaveBeenCalledWith(filePath, "a\nb\nc", "utf8");

    // Verify no errors were logged
    expect(log.error).not.toHaveBeenCalled();

    console.log("writeAllLines test end");
  });

  it("handles write errors", async () => {
    const log = {
      error: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
    };

    const filePath = "/test/path/testfile.txt";
    const lines = ["a", "b", "c"];
    const writeError = new Error("Write failed");

    // Mock dirname to return the directory path
    mockDirname.mockReturnValue("/test/path");

    // Mock successful mkdir but failed writeFile
    mockMkdir.mockResolvedValue(undefined);
    mockWriteFile.mockRejectedValue(writeError);

    await expect(writeAllLines(log, filePath, lines)).rejects.toThrow(
      "Write failed"
    );

    // Verify error was logged
    expect(log.error).toHaveBeenCalledWith(
      `Error writing to file: ${filePath}`,
      writeError
    );
  });
});
