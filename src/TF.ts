import fs from "fs/promises";
import { ElectronLoggerNode } from "./types/ElectronLoggerNode";

export async function writeAllLines(
  log: ElectronLoggerNode,
  filePath: string,
  lines: string[]
) {
  const { error } = log;
  try {
    await fs.writeFile(filePath, lines.join("\n"), "utf8");
  } catch (err) {
    error(`Error writing to file: ${filePath}`, err);
  }
}
