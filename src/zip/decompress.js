import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';

const decompress = async () => {
  const inputFilePath = resolve('../fs/files/archive.gz'); // архив для распаковки
  const outputFilePath = resolve('../fs/files/fileToCompress.txt'); // файл после распаковки

  const readableStream = createReadStream(inputFilePath);
  const writableStream = createWriteStream(outputFilePath);
  const gunzipStream = createGunzip();

  try {
    await pipeline(readableStream, gunzipStream, writableStream);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await decompress();
