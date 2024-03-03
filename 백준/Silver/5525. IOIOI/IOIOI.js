let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let n = Number(inputs[0]);
let m = Number(inputs[1]);
let s = inputs[2];
let answer = 0;
let i = 0;
let cnt = 0;

while (i <= m - 2) {
  if (s.slice(i, i + 3) === 'IOI') {
    i += 2;
    cnt++;

    if (cnt === n) {
      answer++;
      cnt--;
    }
  } else {
    i++;
    cnt = 0;
  }
}

console.log(answer);
