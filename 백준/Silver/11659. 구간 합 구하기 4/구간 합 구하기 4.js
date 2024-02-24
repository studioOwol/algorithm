const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, m] = inputs[0];
let nums = inputs[1];
let dp = Array(n + 1).fill(0);
let answer = [];

for (let i = 1; i < n + 1; i++) {
  dp[i] = dp[i - 1] + nums[i - 1];
}

for (let i = 2; i < m + 2; i++) {
  let [start, end] = inputs[i];
  let sum = dp[end] - dp[start - 1];
  answer.push(sum);
}

console.log(answer.join('\n'));
