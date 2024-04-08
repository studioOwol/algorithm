let [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = t.split(' ').map(Number);
let table = input.map((v) => v.split(' ').map(Number));
let dp = Array(m + 1).fill(0);

for (let i = 0; i < n; i++) {
  let [w, v] = [table[i][0], table[i][1]];

  for (let j = m; j >= w; j--) {
    if (w <= j) {
      dp[j] = Math.max(dp[j], dp[j - w] + v);
    }
  }
}

console.log(dp[m]);
