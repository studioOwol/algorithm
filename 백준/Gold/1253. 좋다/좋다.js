let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(input[0]);
let nums = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let cnt = 0;

for (let i = 0; i < N; i++) {
  let cur = nums[i];
  let left = 0;
  let right = N - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === cur) {
      if (left === i) {
        left++;
      } else if (right === i) {
        right--;
      } else {
        cnt++;
        break;
      }
    } else if (sum < cur) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(cnt);
