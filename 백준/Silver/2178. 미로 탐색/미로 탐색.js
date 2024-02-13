const fs = require('fs');

let [final, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = final.split(' ').map(Number);
let maps = inputs.map((el) => el.split('').map(Number));
let visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);
let directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let queue = [[0, 0, 1]];

visited[0][0] = true;

const bfs = () => {
  while (queue.length) {
    let [x, y, cnt] = queue.shift();

    if (x === m - 1 && y === n - 1) {
      return cnt;
    }

    for (let direction of directions) {
      let nx = x + direction[0];
      let ny = y + direction[1];

      if (!(0 <= nx && nx < m && 0 <= ny && ny < n)) {
        continue;
      }

      if (maps[ny][nx] === 1 && !visited[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }
};

console.log(bfs());
