const fs = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = input.shift().split(' ').map(Number);
let map = {};
let answer = '';

for (let i = 0; i < n; i++) {
  let [address, password] = input[i].split(' ');
  if (!map[address]) {
    map[address] = '';
  }

  map[address] = password;
}

for (let i = n; i < n + m; i++) {
  answer += map[input[i]] + '\n';
}

console.log(answer);
