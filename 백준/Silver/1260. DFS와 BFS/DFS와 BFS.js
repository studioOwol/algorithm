const fs = require('fs');

const [detail, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, m, v] = detail;
let graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(false);
let dfsResult = [];
let bfsResult = [];

for (let [start, end] of inputs) {
  graph[start].push(end);
  graph[end].push(start);
}

for (let i = 0; i < graph.length; i++) {
  graph[i].sort((a, b) => a - b);
}

const dfs = (start) => {
  visited[start] = true;
  dfsResult.push(start);

  for (let node of graph[start]) {
    if (!visited[node]) {
      dfs(node);
    }
  }
};

const bfs = () => {
  let queue = [v];
  visited[v] = true;
  bfsResult.push(v);

  while (queue.length) {
    let curNode = queue.shift();

    for (let node of graph[curNode]) {
      if (!visited[node]) {
        visited[node] = true;
        queue.push(node);
        bfsResult.push(node);
      }
    }
  }
};

dfs(v);
console.log(dfsResult.join(' '));

visited = Array(n + 1).fill(false);

bfs();
console.log(bfsResult.join(' '));
