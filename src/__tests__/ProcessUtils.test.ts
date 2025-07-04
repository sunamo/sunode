import { executeCommandInCmd } from "../ProcessUtils";
describe("executeCommandInCmd", () => {
  it("resolves with stdout on success", async () => {
    const log = {
      error: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
    };
    const result = await executeCommandInCmd({
      command: "echo",
      args: ["hello"],
      log,
    });
    expect(result.trim()).toBe("hello");
  });
});
