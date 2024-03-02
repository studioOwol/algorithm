let [n, r, c] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let answer = 0;

const recursion = (row, col, size) => {
  if (row === r && col === c) {
    console.log(answer);
    return;
  }

  if (row <= r && r < row + size && col <= c && c < col + size) {
    size = Math.floor(size / 2);
    recursion(row, col, size);
    recursion(row, col + size, size);
    recursion(row + size, col, size);
    recursion(row + size, col + size, size);
  } else {
    answer += size * size;
  }
};

recursion(0, 0, Math.pow(2, n));
