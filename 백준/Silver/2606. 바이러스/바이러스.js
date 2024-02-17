const fs = require('fs');

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let n = inputs.shift()[0];
let m = inputs.shift()[0];
let graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(false);
let cnt = 0;

for (let line of inputs) {
  let [start, end] = line;
  graph[start].push(end);
  graph[end].push(start);
}

const dfs = (start) => {
  visited[start] = true;
  cnt++;

  for (let node of graph[start]) {
    if (!visited[node]) {
      dfs(node);
    }
  }
};

dfs(1);

console.log(cnt - 1);
