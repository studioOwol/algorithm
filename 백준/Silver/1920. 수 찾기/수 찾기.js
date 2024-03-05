let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let arr = new Set(inputs[1]);
let nums = inputs[3];
let result = [];

for (let num of nums) {
  result.push(arr.has(num) ? 1 : 0);
}

console.log(result.join('\n'));
