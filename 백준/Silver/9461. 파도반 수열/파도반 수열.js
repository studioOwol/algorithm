const [n, ...nums] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < n; i++) {
  let dp = Array(nums[i] + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;

  for (let j = 3; j <= nums[i]; j++) {
    dp[j] = dp[j - 3] + dp[j - 2];
  }

  console.log(dp[nums[i] - 1]);
}
