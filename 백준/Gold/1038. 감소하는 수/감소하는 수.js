let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let N = Number(input);
let queue = Array.from({ length: 10 }, (_, idx) => idx);
let count = 0;

while (queue.length) {
  const num = queue.shift();

  if (count === N) {
    console.log(num);
    return;
  }

  count++;

  const lastDigit = num % 10;

  for (let i = 0; i < lastDigit; i++) {
    queue.push(num * 10 + i);
  }
}

console.log(-1);
