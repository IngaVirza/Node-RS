import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';

const compress = async () => {
  const inputFilePath = resolve('../fs/files/fileToCompress.txt');
  const outputFilePath = resolve('../fs/files/archive.gz');

  const readableStream = createReadStream(inputFilePath);
  const writableStream = createWriteStream(outputFilePath);
  const gzipStream = createGzip();

  try {
    await pipeline(readableStream, gzipStream, writableStream);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await compress();
