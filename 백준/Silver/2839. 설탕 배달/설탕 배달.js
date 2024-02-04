const fs = require('fs');

const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let sugar = Number(input);
let cnt = 0;

while (sugar >= 3) {
  if (sugar % 5 === 0) {
    sugar -= 5;
    cnt++;
  } else {
    sugar -= 3;
    cnt++;
  }
}

if (sugar === 0) {
  console.log(cnt);
} else {
  console.log(-1);
}
