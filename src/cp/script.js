console.log('Parents arg:', process.argv.slice(2).join(', '));

process.stdin.on('data', (chunk) => {
  console.log('Child received:', chunk.toString());
});
