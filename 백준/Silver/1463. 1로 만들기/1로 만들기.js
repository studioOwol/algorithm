const fs = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

var x = Number(input);
var dp = Array(x + 1).fill(0);

for (var i = 2; i <= x; i++) {
  dp[i] = 1 + dp[i - 1];

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], 1 + dp[i / 2]);
  }

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], 1 + dp[i / 3]);
  }
}

console.log(dp[x]);
