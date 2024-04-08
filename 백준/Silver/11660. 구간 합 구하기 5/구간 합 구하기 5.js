let [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = t.split(' ').map(Number);
let nums = input.slice(0, n).map((str) => str.split(' ').map(Number));
let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
let answer = [];

for (let r = 1; r <= n; r++) {
  for (let c = 1; c <= n; c++) {
    dp[r][c] =
      nums[r - 1][c - 1] + dp[r][c - 1] + dp[r - 1][c] - dp[r - 1][c - 1];
  }
}

for (let i = n; i < n + m; i++) {
  let [r1, c1, r2, c2] = input[i].split(' ').map(Number);

  answer.push(
    dp[r2][c2] - (dp[r1 - 1][c2] + dp[r2][c1 - 1]) + dp[r1 - 1][c1 - 1]
  );
}

console.log(answer.join('\n'));
