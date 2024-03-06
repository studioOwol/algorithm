let [n, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let commands = inputs.map((el) => el.split(' '));
let deque = [];
let result = [];

for (let command of commands) {
  if (command[0] === 'push_front') {
    deque.unshift(Number(command[1]));
    continue;
  }

  if (command[0] === 'push_back') {
    deque.push(Number(command[1]));
    continue;
  }

  if (command[0] === 'pop_front') {
    result.push(deque.length > 0 ? deque.shift() : -1);
  }

  if (command[0] === 'pop_back') {
    result.push(deque.length > 0 ? deque.pop() : -1);
  }

  if (command[0] === 'front') {
    result.push(deque.length > 0 ? deque[0] : -1);
  }

  if (command[0] === 'back') {
    result.push(deque.length > 0 ? deque[deque.length - 1] : -1);
  }

  if (command[0] === 'size') {
    result.push(deque.length);
  }

  if (command[0] === 'empty') {
    if (deque.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
}

console.log(result.join('\n'));
