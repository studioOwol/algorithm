let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = inputs[0].split(' ').map(Number);
let trees = inputs[1].split(' ').map(Number);
let left = 0;
let right = Math.max(...trees);
let result = 0;

while (left < right) {
  let mid = Math.floor((left + right) / 2);
  let sum = 0;

  for (let tree of trees) {
    // 음수인 경우에는 더하지 않도록
    sum += Math.max(tree - mid, 0);
  }

  if (sum >= m) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid;
  }
}

console.log(result);
