import { createWriteStream } from 'fs';
import { resolve } from 'path';

const write = async () => {
  const filePath = resolve('../fs/files/fileToWrite.txt');

  const writableStream = createWriteStream(filePath);

  process.stdin.pipe(writableStream);

  writableStream.on('error', () => {
    throw new Error('FS operation failed');
  });
};

await write();
