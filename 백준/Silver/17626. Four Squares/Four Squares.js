let n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let dp = Array(n + 1).fill(0);
dp[1] = 1;
let min = 0;

for (let i = 2; i <= n; i++) {
  min = Infinity;
  for (let j = 1; j * j <= i; j++) {
    min = Math.min(min, dp[i - j * j]);
  }

  dp[i] = min + 1;
}

console.log(dp[n]);
