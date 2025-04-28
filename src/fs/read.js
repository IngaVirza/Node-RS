const fs = require('fs');
const path = require('path');

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    const dataRead = await fs.promises.readFile(filePath, 'utf-8');
    console.log(dataRead);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};
read();
