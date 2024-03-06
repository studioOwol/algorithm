let [k, ...nums] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let stack = [];

for (let i = 0; i < k; i++) {
  if (stack.length === 0) {
    stack.push(nums[i]);
  } else {
    if (nums[i] === 0) {
      stack.pop();
    } else {
      stack.push(nums[i]);
    }
  }
}

console.log(stack.reduce((acc, value) => acc + value, 0));
