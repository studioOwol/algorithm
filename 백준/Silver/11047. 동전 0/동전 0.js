const { clear } = require('console');
const fs = require('fs');

const [first, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, k] = first.split(' ').map(Number);
let coins = inputs.map(Number);
let answer = 0;

coins.sort((a, b) => b - a);

for (let i = 0; i < n; i++) {
  if (k >= coins[i]) {
    let cnt = Math.floor(k / coins[i]);
    k -= cnt * coins[i];
    answer += cnt;
  }
}

console.log(answer);
