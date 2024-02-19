const fs = require('fs');

const [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = t.split(' ').map(Number);
let map = new Map();
let names = [];
let answer = '';

for (let i = 0; i < n; i++) {
  map.set(input[i], i + 1);
  names.push(input[i]);
}

for (let i = n; i < n + m; i++) {
  let tmp;

  if (isNaN(input[i])) {
    tmp = map.get(input[i]);
  } else {
    tmp = names[input[i] - 1];
  }
  answer += tmp + '\n';
}

console.log(answer);
