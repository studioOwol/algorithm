let [[h, w], [...nums]] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let result = 0;

for (let i = 1; i < w - 1; i++) {
  let leftMax = Math.max(...nums.slice(0, i));
  let rightMax = Math.max(...nums.slice(i + 1));
  let lowest = Math.min(leftMax, rightMax);

  if (nums[i] < lowest) {
    result += lowest - nums[i];
  }
}

console.log(result);
