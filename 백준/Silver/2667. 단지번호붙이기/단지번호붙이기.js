const fs = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let n = Number(input.shift());
let maps = input.map((row) => row.split('').map(Number));
let visited = Array.from({ length: n }, () => Array(n).fill(false));
let directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let complex = 0;
let cnt = 0;
let answer = [];

const dfs = (x, y) => {
  if (maps[y][x] === 1 && !visited[y][x]) {
    visited[y][x] = true;
    cnt++;

    for (let direction of directions) {
      let nx = x + direction[0];
      let ny = y + direction[1];

      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        dfs(nx, ny);
      }
    }
  }
};

for (let y = 0; y < n; y++) {
  for (let x = 0; x < n; x++) {
    if (maps[y][x] === 1 && !visited[y][x]) {
      dfs(x, y);
      complex++;
      answer.push(cnt);
      cnt = 0;
    }
  }
}

answer.sort((a, b) => a - b);

console.log(complex + '\n' + `${answer.join('\n')}`);
