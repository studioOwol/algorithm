let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(inputs[0]);
const buildings = inputs[1].split(' ').map(Number);
let maxCount = 0;

for (let i = 0; i < N; i++) {
  let count = 0;

  let minSlope = Infinity;
  for (let j = i - 1; j >= 0; j--) {
    const slope = (buildings[i] - buildings[j]) / (i - j);

    if (slope < minSlope) {
      minSlope = slope;
      count++;
    }
  }

  let maxSlope = -Infinity;
  for (let j = i + 1; j < N; j++) {
    const slope = (buildings[j] - buildings[i]) / (j - i);

    if (slope > maxSlope) {
      maxSlope = slope;
      count++;
    }
  }

  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);
