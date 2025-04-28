const fs = require('fs');
const path = require('path');

const rename = async () => {
  const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(__dirname, 'files', 'properFilename.md');

  try {
    try {
      await fs.promises.access(oldPath, fs.constants.F_OK);
    } catch (err) {
      throw new Error('FS operation failed');
    }

    try {
      await fs.promises.access(newPath, fs.constants.F_OK);
      throw new Error('FS operation fails');
    } catch (err) {
      if (err.code != 'ENOENT') {
        throw new Error('FS operation failed');
      } else {
        console.log('properFilename.md does not exist, safe to rename.');
      }
    }

    await fs.promises.rename(oldPath, newPath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

rename();
