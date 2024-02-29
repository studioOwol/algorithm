let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [m, n, h] = t;
let boxes = [];
let ds = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];
let visited = Array.from({ length: h }, () =>
  Array.from({ length: n }, () => Array(m).fill(false))
);
let points = [];
let tomatoCnt = 0;
let emptyCnt = 0;
let answer = 0;

for (let i = 0; i < h; i++) {
  let box = [];
  for (let j = 0; j < n; j++) {
    box.push(inputs.shift());
  }

  boxes.push(box);
}

for (let z = 0; z < h; z++) {
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (boxes[z][y][x] === -1) {
        visited[z][y][x] = true;
        emptyCnt++;
      } else {
        if (boxes[z][y][x] === 1) {
          points.push([x, y, z]);
          visited[z][y][x] = true;
          tomatoCnt++;
        }
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
      findTomato(point, newPoints);
    }

    if (newPoints.length > 0) {
      queue.push(newPoints);
      answer++;
    }
  }
};

bfs();

if (m * n * h - emptyCnt === tomatoCnt) {
  console.log(answer);
} else {
  console.log(-1);
}

function findTomato(point, newPoints) {
  let [x, y, z] = point;

  for (let d of ds) {
    let nx = x + d[0];
    let ny = y + d[1];
    let nz = z + d[2];

    if (!(0 <= nx && nx < m && 0 <= ny && ny < n && 0 <= nz && nz < h)) {
      continue;
    }

    if (!visited[nz][ny][nx]) {
      visited[nz][ny][nx] = true;
      newPoints.push([nx, ny, nz]);
      tomatoCnt++;
    }
  }
}
