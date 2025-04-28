const fs = require('fs');
const path = require('path');

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.promises.writeFile(filePath, 'I am fresh and young', 'utf8');
    } else {
      throw new Error('FS operation failed');
    }
  }
};

create();
