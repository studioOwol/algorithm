let [t, ...board] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = t.split(' ').map(Number);
let answer = [];

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    let blackCnt = 0;
    let whiteCnt = 0;
    for (let r = i; r < i + 8; r++) {
      for (let c = j; c < j + 8; c++) {
        if ((r + c) % 2 === 0) {
          if (board[r][c] !== 'W') {
            whiteCnt++;
          } else {
            blackCnt++;
          }
        } else {
          if (board[r][c] !== 'W') {
            blackCnt++;
          } else {
            whiteCnt++;
          }
        }
      }
    }
    answer.push(whiteCnt, blackCnt);
  }
}

console.log(Math.min(...answer));
