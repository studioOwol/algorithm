const { constants } = require('buffer');
const fs = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let n = Number(input.shift());
let meetings = input
  .map((el) => el.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

let end = meetings[0][1];
let cnt = 1;

for (let i = 1; i < n; i++) {
  let [start, nextEnd] = meetings[i];

  if (start >= end) {
    cnt++;
    end = nextEnd;
  }
}

console.log(cnt);
