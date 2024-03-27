let N = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let board = Array.from({ length: N }, () => Array(N).fill('*'));

const recursion = (r, c, size) => {
  if (size === 1) {
    return;
  }

  size = Math.floor(size / 3);

  for (let i = r + size; i < r + size * 2; i++) {
    for (let j = c + size; j < c + size * 2; j++) {
      board[i][j] = ' ';
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      recursion(r + size * i, c + size * j, size);
    }
  }
};

recursion(0, 0, N);

console.log(board.map((v) => v.join('')).join('\n'));
