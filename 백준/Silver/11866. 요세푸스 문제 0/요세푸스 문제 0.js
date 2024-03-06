let [n, k] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let queue = [];
let answer = [];

for (let i = 1; i <= n; i++) {
  queue.push(i);
}

while (queue.length) {
  for (let i = 0; i < k - 1; i++) {
    queue.push(queue.shift());
  }

  answer.push(queue.shift());
}

console.log(`<${answer.join(', ')}>`);
