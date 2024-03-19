let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(inputs.shift());
let K = Number(inputs[0]);
let apples = [];
let commands = [];
let board = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
let log = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
let tail = [1, 1];
let ds = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let time = 0;

for (let i = 1; i < K + 1; i++) {
  apples.push(inputs[i].split(' ').map(Number));
}

for (let i = K + 2; i < inputs.length; i++) {
  let [x, c] = inputs[i].split(' ');
  commands.push([+x, c]);
}

for (let i = 0; i < K; i++) {
  let [r, c] = apples[i];
  board[r][c] = 1;
}

recursion(1, 1, 1, 0);
console.log(time + 1);

function recursion(r, c, d) {
  board[r][c] = 2;
  log[r][c] = d;

  let nr = r + ds[d][0];
  let nc = c + ds[d][1];

  if (!(1 <= nr && nr < N + 1 && 1 <= nc && nc < N + 1)) {
    return;
  }

  if (board[nr][nc] === 2) {
    return;
  }

  if (board[nr][nc] === 0) {
    let td = log[tail[0]][tail[1]];
    let tr = tail[0] + ds[td][0];
    let tc = tail[1] + ds[td][1];

    board[tail[0]][tail[1]] = 0;
    tail = [tr, tc];
  }

  time++;

  if (commands.length !== 0) {
    let totalTime = commands[0][0];

    if (time === totalTime) {
      if (commands[0][1] === 'L') {
        d = (d + 3) % 4;
      } else {
        d = (d + 1) % 4;
      }

      commands.shift();
    }
  }

  recursion(nr, nc, d);
}
