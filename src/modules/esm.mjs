import fs from 'fs';
import path from 'path';

console.log('Node.js with RS School');

export default function (fileName) {
  const filePath = path.join(__dirname, fileName);
  return fs.readFileSync(filePath, 'utf-8');
}
