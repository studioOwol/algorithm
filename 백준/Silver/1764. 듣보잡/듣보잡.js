const fs = require('fs');

const [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = t.split(' ').map(Number);
let map = new Map();
let arr = [];
let answer = '';

for (let i = 0; i < n; i++) {
  map.set(input[i], 1);
}

for (let i = n; i < n + m; i++) {
  if (map.get(input[i]) === 1) {
    arr.push(input[i]);
  }
}

arr.sort();

answer += String(arr.length) + '\n';
answer += arr.join('\n');

console.log(answer);
