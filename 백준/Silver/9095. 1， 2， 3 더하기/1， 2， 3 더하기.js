const fs = require('fs');

const [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < t; i++) {
  let dp = Array(inputs[i] + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let j = 3; j <= inputs[i]; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }

  console.log(dp[inputs[i]]);
}
