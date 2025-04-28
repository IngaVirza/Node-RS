const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
  const filePath = path.join(__dirname, fileName);
  return fs.readFileSync(filePath, 'utf-8');
};
