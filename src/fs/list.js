const fs = require('fs');
const path = require('path');

const list = async () => {
  const folderPath = path.join(__dirname, 'files');

  try {
    await fs.promises.access(folderPath, fs.constants.F_OK);
    const files = await fs.promises.readdir(folderPath);
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};
list();
