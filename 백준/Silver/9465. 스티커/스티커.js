let [test, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let t = Number(test);

for (let i = 0; i < input.length; i += 3) {
  let n = Number(input[i]);
  let row1 = input[i + 1].split(' ').map(Number);
  let row2 = input[i + 2].split(' ').map(Number);

  let dp = [[0, row1[0], row2[0]]];

  for (let j = 1; j < n; j++) {
    dp[j] = [
      Math.max(...dp[j - 1]),
      Math.max(dp[j - 1][0], dp[j - 1][2]) + row1[j],
      Math.max(dp[j - 1][0], dp[j - 1][1]) + row2[j],
    ];
  }

  console.log(Math.max(...dp[n - 1]));
}
