let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let N = Number(input);
let dp = Array(N + 1).fill(-1);

dp[3] = 1;
if (N >= 5) dp[5] = 1;

for (let i = 6; i < N + 1; i++) {
  let case3 = dp[i - 3];
  let case5 = dp[i - 5];

  if (case3 !== -1 && case5 !== -1) {
    dp[i] = Math.min(case3, case5) + 1;
  } else if (case3 !== -1) {
    dp[i] = case3 + 1;
  } else if (case5 !== -1) {
    dp[i] = case5 + 1;
  }
}

console.log(dp[N]);
