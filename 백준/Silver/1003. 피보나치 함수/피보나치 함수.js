const fs = require('fs');

const [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const fibonacci = (n) => {
  let dp = Array.from({ length: n + 1 }, () => [0, 0]);
  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }

  return dp[n];
};

inputs.forEach((n) => {
  let [zeroCnt, oneCnt] = fibonacci(n);
  console.log(zeroCnt, oneCnt);
});
