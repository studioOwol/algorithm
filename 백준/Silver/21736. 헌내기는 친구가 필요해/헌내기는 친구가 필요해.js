const fs = require('fs');

const [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = t.split(' ').map(Number);
let maps = input.map((el) => el.split(''));
let ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let visited = [...Array(n)].map((el) => Array(m).fill(0));
let queue = [];
let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (maps[i][j] === 'I') {
      queue.push([j, i]);
      visited[i][j] = 1;
    }

    if (maps[i][j] === 'X') {
      visited[i][j] = 1;
    }
  }
}

const bfs = () => {
  while (queue.length) {
    let [x, y] = queue.pop();

    for (let d of ds) {
      let nx = x + d[0];
      let ny = y + d[1];

      if (0 <= nx && nx < m && 0 <= ny && ny < n && !visited[ny][nx]) {
        visited[ny][nx] = 1;

        if (maps[ny][nx] === 'P') {
          answer++;
        }

        queue.push([nx, ny]);
      }
    }
  }
};

bfs();

console.log(answer ? answer : 'TT');
