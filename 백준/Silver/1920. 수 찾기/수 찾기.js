let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n] = inputs[0];
let arr = inputs[1];
let [m] = inputs[2];
let nums = inputs[3];
let result = [];

arr.sort((a, b) => a - b);

for (let num of nums) {
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      result.push(1);
      break;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (left > right) {
    result.push(0);
  }
}

console.log(result.join('\n'));
