import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const runWorker = (data, workerPath) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath);

    worker.postMessage(data);

    worker.on('message', (result) => {
      resolve(result);
    });

    worker.on('error', reject);

    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
};

const main = async () => {
  const workerPath = resolve(__dirname, './worker.js');
  const numCPUs = cpus().length;
  const results = [];

  const promises = [];

  for (let i = 0; i < numCPUs; i++) {
    const data = 10 + i;
    promises.push(
      runWorker(data, workerPath)
        .then((result) => {
          results.push(result);
        })
        .catch((error) => {
          results.push({
            status: 'error',
            data: null,
          });
        })
    );
  }

  await Promise.all(promises);

  console.log(results);
};

main();
