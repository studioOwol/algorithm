const fs = require('fs');

const [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [m, n] = t.split(' ').map(Number);
let box = input.map((el) => el.split(' ').map(Number));
let visited = Array.from({ length: n }, () => Array(m).fill(false));
let ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let points = [];
let tomatoCnt = 0;
let emptyCnt = 0;
let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === -1) {
      visited[i][j] = true;
      emptyCnt++;
    } else {
      if (box[i][j] === 1) {
        points.push([j, i]);
        visited[i][j] = true;
        tomatoCnt++;
      }
    }
  }
}

let queue = [points];

const bfs = () => {
  while (queue.length) {
    let points = queue.shift();
    let newPoints = [];

    for (let point of points) {
      makeTomatoRipen(point, newPoints);
    }

    if (newPoints.length > 0) {
      queue.push(newPoints);
      answer++;
    }
  }
};

bfs();

if (m * n - emptyCnt === tomatoCnt) {
  console.log(answer);
} else {
  console.log(-1);
}

function makeTomatoRipen(point, newPoints) {
  let [x, y] = point;

  for (let d of ds) {
    let nx = x + d[0];
    let ny = y + d[1];

    if (0 <= nx && nx < m && 0 <= ny && ny < n) {
      if (!visited[ny][nx]) {
        visited[ny][nx] = true;
        newPoints.push([nx, ny]);
        tomatoCnt++;
      }
    }
  }
}
