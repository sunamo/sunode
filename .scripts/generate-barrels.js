const fs = require('fs');
const path = require('path');

function getAllSubdirectoriesRecursive(srcDir, relativePath = '') {
  let allSubdirs = [];
  const currentDir = relativePath ? path.join(srcDir, relativePath) : srcDir;
  const filesAndDirs = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const dirent of filesAndDirs) {
    if (dirent.isDirectory() && dirent.name !== '__tests__') {
      const relativeSubdirPath = relativePath ? [relativePath, dirent.name].join('/') : dirent.name;
      allSubdirs.push(relativeSubdirPath); // Přidáme relativní cestu k podsložce

      // Rekurzivně voláme pro vnořené podsložky
      const nestedSubdirs = getAllSubdirectoriesRecursive(srcDir, relativeSubdirPath);
      allSubdirs = allSubdirs.concat(nestedSubdirs);
    }
  }
  return allSubdirs;
}

function generateBarrels() {
  const srcDir = path.join(__dirname, '..', 'src');
  const indexFile = path.join(srcDir, 'index.ts');

  // Get all .ts files in src directory (excluding test files and index.ts)
  const files = fs
    .readdirSync(srcDir, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.ts'))
    .filter(
      (dirent) =>
        !dirent.name.includes('.test.') &&
        !dirent.name.includes('.spec.') &&
        dirent.name !== 'index.ts'
    )
    .map((dirent) => dirent.name.replace('.ts', ''));

  // Get all subdirectories
  const subdirs = getAllSubdirectoriesRecursive(srcDir);

  // Generate export statements - only named exports, no default exports
  const exports = [];

  // Add file exports
  files.forEach((file) => {
    exports.push(`export * from './${file}';`);
  });

  // Add subdirectory exports
  subdirs.forEach((subdir) => {
    const subdirPath = path.join(srcDir, subdir);
    const subdirFiles = fs
      .readdirSync(subdirPath, { withFileTypes: true })
      .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.ts'))
      .filter((dirent) => !dirent.name.includes('.test.') && !dirent.name.includes('.spec.'))
      .map((dirent) => dirent.name.replace('.ts', ''));

    subdirFiles.forEach((file) => {
      exports.push(`export * from './${subdir}/${file}';`);
    });
  });

  // Write to index.ts
  const content = exports.join('\n') + '\n';
  fs.writeFileSync(indexFile, content);

  console.log('Generated barrel exports without default exports:');
  console.log(content);
}

generateBarrels();
