const fs = require('fs');

let [cnt, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

// i = 거쳐가는 점
for (let i = 0; i < cnt; i++) {
  // j = 시작점
  for (let j = 0; j < cnt; j++) {
    // k = 끝점
    for (let k = 0; k < cnt; k++) {
      if (inputs[j][i] === 1 && inputs[i][k] === 1) {
        inputs[j][k] = 1;
      }
    }
  }
}

console.log(inputs.map((value) => value.join(' ')).join('\n'));
