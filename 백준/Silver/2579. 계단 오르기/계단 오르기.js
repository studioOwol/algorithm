const { constants } = require('buffer');
const fs = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let n = input[0];
let dp = Array(n + 1).fill(0);

dp[1] = input[1];
dp[2] = dp[1] + input[2];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
}

console.log(dp[n]);
