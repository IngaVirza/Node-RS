import { createReadStream } from 'fs';
import { resolve } from 'path';

const read = async () => {
  const filePath = resolve('../fs/files/fileToRead.txt');

  const readableStream = createReadStream(filePath);

  readableStream.pipe(process.stdout);

  readableStream.on('error', () => {
    throw new Error('FS operation failed');
  });
};

await read();
