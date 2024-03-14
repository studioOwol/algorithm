let [[n], [...nums]] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let dp = Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
    }
  }
}

let max = Math.max(...dp);
console.log(max);
