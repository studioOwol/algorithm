let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let n = Number(t);
let drawing = inputs.map((el) => el.split(''));
let colorBlind = drawing.map((arr) =>
  arr.map((color) => {
    if (color === 'G') {
      return 'R';
    }
    return color;
  })
);
let directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let visitedN = Array.from({ length: n }, () => Array(n).fill(false));
let visitedB = Array.from({ length: n }, () => Array(n).fill(false));
let normalCnt = 0;
let blindCnt = 0;

const bfs = (x, y, graph, visited) => {
  let queue = [[x, y]];
  visited[y][x] = true;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let d of directions) {
      let nx = x + d[0];
      let ny = y + d[1];

      if (!(0 <= nx && nx < n && 0 <= ny && ny < n)) {
        continue;
      }

      if (graph[y][x] === graph[ny][nx] && !visited[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([nx, ny]);
      }
    }
  }
};

for (let y = 0; y < n; y++) {
  for (let x = 0; x < n; x++) {
    if (!visitedN[y][x]) {
      bfs(x, y, drawing, visitedN);
      normalCnt++;
    }
  }
}

for (let y = 0; y < n; y++) {
  for (let x = 0; x < n; x++) {
    if (!visitedB[y][x]) {
      bfs(x, y, colorBlind, visitedB);
      blindCnt++;
    }
  }
}

console.log(normalCnt, blindCnt);
