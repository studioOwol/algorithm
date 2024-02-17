const fs = require('fs');

const [first, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, k] = first.split(' ').map(Number);
let coins = inputs.map(Number).reverse();
let answer = 0;

for (let i = 0; i < n; i++) {
  if (k >= coins[i]) {
    answer += Math.floor(k / coins[i]);
    k %= coins[i];
  }
}

console.log(answer);
