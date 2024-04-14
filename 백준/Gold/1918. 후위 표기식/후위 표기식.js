let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('');

let stack = [];
let answer = '';

for (let i of input) {
  if (i === '(') {
    stack.push(i);
  } else if (i === ')') {
    while (stack.length && stack[stack.length - 1] !== '(') {
      answer += stack.pop();
    }
    stack.pop();
  } else if (i === '*' || i === '/') {
    while (
      (stack.length && stack[stack.length - 1] === '*') ||
      stack[stack.length - 1] === '/'
    ) {
      answer += stack.pop();
    }
    stack.push(i);
  } else if (i === '+' || i === '-') {
    while (stack.length && stack[stack.length - 1] !== '(') {
      answer += stack.pop();
    }
    stack.push(i);
  } else {
    answer += i;
  }
}

while (stack.length) {
  answer += stack.pop();
}

console.log(answer);
