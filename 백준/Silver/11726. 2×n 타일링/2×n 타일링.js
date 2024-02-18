const { constants } = require('buffer');
const fs = require('fs');

const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

const fibonacci = (n) => {
  let dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  return dp[n];
};

console.log(fibonacci(input));
