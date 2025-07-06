# sunodejs

[![CI/CD](https://img.shields.io/badge/CI%2FCD-pending-yellow)](https://github.com/sunamo/sunodejs/actions) [![Tests](https://img.shields.io/badge/tests-pending-yellow)](https://github.com/sunamo/sunodejs/actions) [![Coverage](https://img.shields.io/badge/coverage-45%25-orange)](https://github.com/sunamo/sunodejs) [![NPM Version](https://img.shields.io/npm/v/sunodejs.svg)](https://www.npmjs.com/package/sunodejs) [![License](https://img.shields.io/npm/l/sunodejs.svg)](https://github.com/sunamo/sunodejs/blob/main/LICENSE)

A comprehensive Node.js utility library with TypeScript support for file system operations, process management, and Electron applications.

## Features

- **File System Operations**: Easy-to-use functions for file and directory management
- **Process Utilities**: Cross-platform process management tools
- **Electron Integration**: Utilities specifically designed for Electron applications
- **TypeScript Support**: Full TypeScript definitions included
- **Cross-Platform**: Works on Windows, macOS, and Linux

## Installation

```bash
npm install sunodejs
```

## Usage

### File System Operations

```typescript
import {
  fileExists,
  createFoldersPsysicallyUnlessThere,
  writeAllLines,
} from "sunodejs";

// Check if file exists
const exists = await fileExists("/path/to/file.txt");

// Create directories recursively
await createFoldersPsysicallyUnlessThere(logger, "/path/to/directory");

// Write lines to file
await writeAllLines(logger, "/path/to/file.txt", ["line1", "line2", "line3"]);
```

### Process Utils

```typescript
import { ProcessUtils } from "sunodejs";

// Process management utilities
// (See source code for available functions)
```

### Electron Integration

```typescript
import { ElectronLoggerNode } from "sunodejs";

// Electron-specific logging and utilities
// Designed for Electron main process integration
```

## API Reference

### File System Functions

- `fileExists(path: string): Promise<boolean>` - Check if file exists
- `fileExistsWithData(path: string): Promise<boolean>` - Check if file exists with data
- `createFoldersPsysicallyUnlessThere(log: ElectronLoggerNode, path: string): Promise<boolean>` - Create directories recursively
- `writeAllLines(log: ElectronLoggerNode, filePath: string, lines: string[]): Promise<void>` - Write lines to file

### Enums

- `AppFolders` - Application folder constants

### Types

- `ElectronLoggerNode` - Logger interface for Electron applications

## Background

This library was created to solve bundling issues with Node.js modules in web environments, particularly for Electron applications. Node core modules like `net`, `tls`, and `child_process` don't exist in web environments, but are often required by Node.js libraries.

This package provides a clean separation between Node.js functionality and web-compatible code, making it ideal for Electron applications that need to maintain strict separation between main and renderer processes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC License
