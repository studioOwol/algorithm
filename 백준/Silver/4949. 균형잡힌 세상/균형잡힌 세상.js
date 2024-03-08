let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let answer = [];

for (let i = 0; i < inputs.length - 1; i++) {
  let stack = [];
  let isValid = true;

  for (let j = 0; j < inputs[i].length; j++) {
    let current = inputs[i][j];

    if (current === '(' || current === '[') {
      stack.push(current);
    } else if (current === ')' || current === ']') {
      if (stack.length === 0) {
        isValid = false;
        break;
      }

      let top = stack.pop();
      if (
        (current === ')' && top !== '(') ||
        (current === ']' && top !== '[')
      ) {
        isValid = false;
        break;
      }
    }
  }

  if (stack.length !== 0 || !isValid) {
    answer.push('no');
  } else {
    answer.push('yes');
  }
}

console.log(answer.join('\n'));
