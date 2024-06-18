let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(inputs[0]);
let arr = inputs[1].split(' ').map(Number);
let left = 0;
let right = 0;
let kind = 0;
let max = 0;
let cnt = 0;
let nums = new Array(10).fill(0);

while (right < N) {
  if (nums[arr[right]] === 0) {
    kind++;
  }

  cnt++;
  nums[arr[right]]++;

  if (kind > 2) {
    if (--nums[arr[left]] === 0) {
      kind--;
    }
    cnt--;
    left++;
  }

  max = Math.max(max, cnt);
  right++;
}

console.log(max);
