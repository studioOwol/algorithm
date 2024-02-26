let n = parseInt(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
    .toString()
    .trim()
);

let dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;
dp[3] = 5;

for (let i = 4; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[n]);
