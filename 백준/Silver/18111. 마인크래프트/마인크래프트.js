let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m, b] = input.shift().split(' ').map(Number);
const arr = input.map((i) => i.split(' ').map(Number));

let ansTime = Infinity;
let ansHeight = -1;

for (let h = 0; h <= 256; h++) {
  let inventory = 0;
  let removeCnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let curh = arr[i][j] - h;
      if (curh < 0) inventory -= curh;
      else removeCnt += curh;
    }
  }

  if (removeCnt + b >= inventory) {
    let time = 2 * removeCnt + inventory;
    if (ansTime >= time) {
      ansTime = time;
      ansHeight = h;
    }
  }
}

console.log(ansTime, ansHeight);
