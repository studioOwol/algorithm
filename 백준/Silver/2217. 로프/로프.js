let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = inputs.shift();
inputs.sort((a, b) => a - b);
let maxWeight = 0;

for (let i = 0; i < N; i++) {
  const weight = inputs[i] * (N - i);
  maxWeight = Math.max(maxWeight, weight);
}

console.log(maxWeight);
