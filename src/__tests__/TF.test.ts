import { writeAllLines } from "../TF";
import os from "os";
import path from "path";
import fs from "fs/promises";

describe("writeAllLines", () => {
  it("writes all lines to a file", async () => {
    const log = {
      error: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
    };
    const tempDir = os.tmpdir();
    // Use a unique filename to avoid conflicts
    const filePath = path.join(tempDir, `testfile_${Date.now()}.txt`);
    // Ensure the temp directory exists (should always exist, but for safety)
    await fs.mkdir(tempDir, { recursive: true });
    const lines = ["a", "b", "c"];
    await writeAllLines(log, filePath, lines);
    const content = await fs.readFile(filePath, "utf8");
    expect(content).toBe("a\nb\nc");
    await fs.unlink(filePath);
  });
});
