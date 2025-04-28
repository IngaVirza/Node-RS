const fs = require('fs');
const path = require('path');

const remove = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    await fs.promises.unlink(filePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

remove();
