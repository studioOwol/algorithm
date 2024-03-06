let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let cases = inputs.slice(0, inputs.length - 1);
let answer = [];

for (let i = 0; i < cases.length; i++) {
  let [a, b, c] = cases[i].sort((x, y) => x - y);
  let maxNum = Math.max(a, b, c);
  let sum = a ** 2 + b ** 2 + c ** 2 - maxNum ** 2;

  if (sum === maxNum ** 2) {
    answer.push('right');
  } else {
    answer.push('wrong');
  }
}

console.log(answer.join('\n'));
