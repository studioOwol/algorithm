let [n, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let commands = inputs.map((el) => el.split(' '));
let stack = [];
let answer = [];

for (let command of commands) {
  if (command[0] === 'push') {
    stack.push(command[1]);
    continue;
  }

  if (command[0] === 'top') {
    if (stack.length === 0) {
      answer.push(-1);
    } else {
      answer.push(stack[stack.length - 1]);
    }
  }

  if (command[0] === 'size') {
    answer.push(stack.length);
  }

  if (command[0] === 'empty') {
    if (stack.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  }

  if (command[0] === 'pop') {
    if (stack.length === 0) {
      answer.push(-1);
    } else {
      answer.push(stack.pop());
    }
  }
}

console.log(answer.join('\n'));
