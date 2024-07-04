let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(inputs.shift());
let pos = inputs.map((v) => v.split(' ').map(Number));
let board = Array.from({ length: 6 }, () => Array(6).fill('.'));
let blank = '.';
let ds = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
let [white, black] = [0, 0];

board[2][2] = 'W';
board[3][3] = 'W';
board[2][3] = 'B';
board[3][2] = 'B';

for (let i = 0; i < N; i++) {
  let [r, c] = pos[i];
  if (i % 2 === 0) {
    board[r - 1][c - 1] = 'B';
    play(r - 1, c - 1, 'B');
  }

  if (i % 2 === 1) {
    board[r - 1][c - 1] = 'W';
    play(r - 1, c - 1, 'W');
  }
}

for (let r = 0; r < 6; r++) {
  for (let c = 0; c < 6; c++) {
    if (board[r][c] === 'W') {
      white++;
    }

    if (board[r][c] === 'B') {
      black++;
    }
  }
}

let result = board.map((v) => v.join('')).join('\n') + '\n';

if (white < black) {
  result += 'Black';
} else {
  result += 'White';
}

console.log(result);

function play(r, c, type) {
  for (let d of ds) {
    let nr = r + d[0];
    let nc = c + d[1];

    if (!isValid(nr, nc)) continue;

    let newPos = [];

    while (
      isValid(nr, nc) &&
      board[nr][nc] !== blank &&
      board[nr][nc] !== type
    ) {
      newPos.push([nr, nc]);
      nr += d[0];
      nc += d[1];
    }

    if (isValid(nr, nc) && board[nr][nc] === type) {
      for (let i = 0; i < newPos.length; i++) {
        board[newPos[i][0]][newPos[i][1]] = type;
      }
    }
  }
}

function isValid(nr, nc) {
  return 0 <= nr && nr < 6 && 0 <= nc && nc < 6;
}
