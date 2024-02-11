const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = Number(input[0]);
let list = input.slice(1).map((e) => {
  return e.split(' ').map(Number);
});

for (let i = 0; i < cnt; i++) {
  for (let j = 0; j < cnt; j++) {
    for (let k = 0; k < cnt; k++) {
      if (list[j][i] && list[i][k]) list[j][k] = 1;
    }
  }
}

console.log(
  list
    .map((e) => {
      return e.join(' ');
    })
    .join('\n')
);
