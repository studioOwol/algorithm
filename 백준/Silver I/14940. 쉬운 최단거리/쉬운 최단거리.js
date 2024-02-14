const { clear } = require('console');
const fs = require('fs');

let [size, ...maps] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, m] = size;
let directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);
let queue = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (maps[i][j] === 2) {
      queue.push([j, i, 0]);
      visited[i][j] = true;
    }

    if (maps[i][j] === 0) {
      visited[i][j] = true;
    }
  }
}

let result = Array.from({ length: n }, () => Array(m).fill(0));

const bfs = () => {
  while (queue.length) {
    let [x, y, cnt] = queue.shift();
    result[y][x] = cnt;

    for (let direction of directions) {
      let nx = x + direction[0];
      let ny = y + direction[1];

      if (!(0 <= nx && nx < m && 0 <= ny && ny < n)) {
        continue;
      }

      if (!visited[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }
};

bfs();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (result[i][j] === 0 && !visited[i][j]) {
      result[i][j] = -1;
    }
  }
}

console.log(
  result
    .map((el) => {
      return el.join(' ');
    })
    .join('\n')
);
