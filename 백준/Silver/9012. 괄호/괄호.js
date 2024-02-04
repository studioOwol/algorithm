const fs = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const brackets = input.slice(1);

brackets.forEach((bracket) => {
  let stack = [];
  for (let i = 0; i < bracket.length; i++) {
    if (stack.length && bracket[i] === ')') {
      stack.pop();
      continue;
    }

    if (bracket[i] === ')') {
      console.log('NO');
      return;
    } else {
      stack.push(bracket[i]);
    }
  }

  if (stack.length === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
});
