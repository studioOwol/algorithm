let [n, m] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [lenN, lenM] = [n.length, m.length];

dp = Array.from({ length: lenN + 1 }, () => Array(lenM + 1).fill(0));

for (let i = 1; i < lenN + 1; i++) {
  for (let j = 1; j < lenM + 1; j++) {
    if (n[i - 1] === m[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[lenN][lenM]);
