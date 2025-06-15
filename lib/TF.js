"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeAllLines = writeAllLines;
const promises_1 = __importDefault(require("fs/promises"));
async function writeAllLines(log, filePath, lines) {
    const { error } = log;
    try {
        await promises_1.default.writeFile(filePath, lines.join("\n"), "utf8");
    }
    catch (err) {
        error(`Error writing to file: ${filePath}`, err);
    }
}
