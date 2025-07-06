import fs from 'fs/promises';
import { dirname } from 'path';
import { ElectronLoggerNode } from './types/ElectronLoggerNode';

export async function writeAllLines(log: ElectronLoggerNode, filePath: string, lines: string[]) {
  const { error } = log;
  try {
    // Ensure the directory exists
    const dir = dirname(filePath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filePath, lines.join('\n'), 'utf8');
  } catch (err) {
    error(`Error writing to file: ${filePath}`, err);
  }
}
