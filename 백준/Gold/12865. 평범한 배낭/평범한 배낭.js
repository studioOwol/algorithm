let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const [N, K] = inputs.shift();
const dp = new Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const w = inputs[i][0];
  const v = inputs[i][1];

  for (let j = K; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v);
  }
}

console.log(dp[K]);