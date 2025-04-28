const fs = require('fs');
const path = require('path');

const copy = async () => {
  const sourceDir = path.join(__dirname, 'files');
  const destDir = path.join(__dirname, 'files_copy');

  try {
    await fs.promises.access(sourceDir, fs.constants.F_OK);

    try {
      await fs.promises.access(destDir, fs.constants.F_OK);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw new Error('FS operation failed');
      }
    }
    await fs.promises.mkdir(destDir);
    const files = await fs.promises.readdir(sourceDir);

    for (const file of files) {
      const srcFile = path.join(sourceDir, file);
      const destFile = path.join(destDir, file);

      await fs.promises.copyFile(srcFile, destFile);
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};
copy();
