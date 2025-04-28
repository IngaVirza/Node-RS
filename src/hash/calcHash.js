import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
import { resolve } from 'path';

const calculateHash = async () => {
  const filePath = resolve('fileToCalculateHashFor.txt');
  const hash = createHash('sha256');

  const hashTransform = new Transform({
    transform(chunk, encoding, callback) {
      hash.update(chunk);
      callback(null, chunk);
    },
  });

  try {
    await pipeline(createReadStream(filePath), hashTransform);
    console.log(hash.digest('hex'));
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await calculateHash();
