const [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, m] = t;
let graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(0);
let cnt = 0;

for (let [start, end] of inputs) {
  graph[start].push(end);
  graph[end].push(start);
}

const dfs = (start) => {
  visited[start] = true;

  for (let node of graph[start]) {
    if (!visited[node]) {
      dfs(node);
    }
  }
};

for (let i = 1; i < n + 1; i++) {
  if (!visited[i]) {
    dfs(i);
    cnt++;
  }
}

console.log(cnt);
