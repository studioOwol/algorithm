let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = +inputs[0];
let numMap = new Map();
let checkNums = inputs[3].split(' ').map(Number);
let result = [];

inputs[1].split(' ').forEach((el) => {
  let num = Number(el);
  numMap.set(num, (numMap.get(num) || 0) + 1);
});

checkNums.forEach((num) => {
  if (numMap.has(num)) {
    result.push(numMap.get(num));
  } else {
    result.push(0);
  }
});

console.log(result.join(' '));
