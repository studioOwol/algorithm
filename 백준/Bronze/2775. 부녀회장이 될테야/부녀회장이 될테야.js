let [t, ...nums] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < t; i++) {
  let k = nums[i * 2];
  let n = nums[i * 2 + 1];
  let dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let floor = 1; floor <= k; floor++) {
    for (let room = 1; room <= n; room++) {
      dp[floor][room] = dp[floor - 1][room] + dp[floor][room - 1];
    }
  }

  console.log(dp[k][n]);
}
