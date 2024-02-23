const [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let n = Number(t);
let nums = inputs.map((el) => el.split(' ').map(Number)).flat();
let orderedNums = nums.slice().sort((a, b) => a - b);
let numSet = [...new Set(orderedNums)];
let numMap = new Map();
let answer = [];

for (let i = 0; i < numSet.length; i++) {
  numMap.set(numSet[i], i);
}

nums.forEach((num) => {
  answer.push(numMap.get(num));
});

console.log(answer.join(' '));
