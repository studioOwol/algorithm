const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const map = input.map((row) => row.split("").map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));

//상하좌우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let count_home = 0;
let count_complex = 0;
const answer = [];

const dfs = (x, y) => {
  if (map[x][y] === 1 && visited[x][y] === false) {
    visited[x][y] = true;
    count_home++;

    for (let i = 0; i < 4; i++) {
      const [newX, newY] = [x + dx[i], y + dy[i]];
      if (newX >= 0 && newX < N && newY >= 0 && newY < N) {
        dfs(newX, newY);
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && visited[i][j] === false) {
      dfs(i, j);
      count_complex++;
      answer.push(count_home);
      count_home = 0;
    }
  }
}

console.log(
  count_complex + "\n" + `${answer.sort((a, b) => a - b).join("\n")}`
);