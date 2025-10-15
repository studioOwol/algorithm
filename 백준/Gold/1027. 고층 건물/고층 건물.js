let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(inputs[0]);
const buildings = inputs[1].split(' ').map(Number);
let maxCount = 0;

for (let i = 0; i < N; i++) {
  const currBuilding = buildings[i];
  let count = 0;
  let minSlope = Infinity;
  let maxSlope = -Infinity;

  for (let j = i - 1; j >= 0; j--) {
    const anotherBuilding = buildings[j];
    const slope = (currBuilding - anotherBuilding) / (i - j);

    if (slope >= minSlope) continue;

    minSlope = slope;
    count++;
  }

  for (let j = i + 1; j < N; j++) {
    const anotherBuilding = buildings[j];
    const slope = (currBuilding - anotherBuilding) / (i - j);

    if (slope <= maxSlope) continue;

    maxSlope = slope;
    count++;
  }

  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);
