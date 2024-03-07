let [n, ...nums] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let stack = [];
let answer = [];
let num = 0;

for (let i = 0; i < n; i++) {
  while (num < nums[i]) {
    stack.push(num);
    answer.push('+');
    num++;
  }

  if (stack[stack.length - 1] < nums[i]) {
    stack.pop();
    answer.push('-');
  }
}

if (stack.length === 0) {
  console.log(answer.join('\n'));
} else {
  console.log('NO');
}
