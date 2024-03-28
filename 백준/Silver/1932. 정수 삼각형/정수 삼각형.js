let [N, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let nums = inputs.map((el) => el.split(' ').map(Number));

for (let i = N - 2; i >= 0; i--) {
  for (let j = 0; j < nums[i].length; j++) {
    nums[i][j] += Math.max(nums[i + 1][j], nums[i + 1][j + 1]);
  }
}

console.log(nums[0][0]);
