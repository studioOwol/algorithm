let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(inputs.shift());
const tasks = inputs.map((task) => task.split(' ').map(Number));
const maxDeadline = Math.max(...tasks.map((t) => t[0]));
let days = Array(maxDeadline + 1).fill(false);
let total = 0;

tasks.sort((a, b) => b[1] - a[1]);

for (const [day, score] of tasks) {
  for (let i = day; i > 0; i--) {
    if (!days[i]) {
      days[i] = true;
      total += score;
      break;
    }
  }
}

console.log(total);
