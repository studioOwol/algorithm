const fs = require('fs');

const [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < inputs.length; i++) {
  inputs[i] = inputs[i].split(' ').map(Number);
}

let farm = [];
let visited = [];
const ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const dfs = (y, x, n, m) => {
  visited[y][x] = true;

  for (d of ds) {
    let nx = x + d[0];
    let ny = y + d[1];

    if (0 <= ny && ny < n && 0 <= nx && nx < m) {
      if (farm[ny][nx] === 1 && !visited[ny][nx]) {
        dfs(ny, nx, n, m);
      }
    }
  }
};

for (let i = 0; i < t; i++) {
  let answer = 0;

  let [m, n, k] = inputs.shift();
  farm = Array.from(Array(n), () => Array(m).fill(0));
  visited = Array.from(Array(n), () => Array(m).fill(false));

  while (k > 0) {
    k--;
    const [x, y] = inputs.shift();
    farm[y][x] = 1;
  }

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (farm[y][x] === 1 && !visited[y][x]) {
        dfs(y, x, n, m);
        answer++;
      }
    }
  }
  console.log(answer);
}
