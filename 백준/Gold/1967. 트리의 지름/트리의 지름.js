let [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = +t;
let graph = Array.from({ length: N + 1 }, () => []);
let dist = Array(N + 1).fill(0);
let visited = Array(N + 1).fill(false);
let maxNode = 0;

input.forEach((v) => {
  let [a, b, cost] = v.split(' ').map(Number);

  graph[a].push([b, cost]);
  graph[b].push([a, cost]);
});

dfs(1);
maxNode = dist.indexOf(Math.max(...dist));
visited = Array(N + 1).fill(false);
dist = Array(N + 1).fill(0);
dfs(maxNode);

console.log(Math.max(...dist));

function dfs(node) {
  visited[node] = true;

  for (let i = 0; i < graph[node].length; i++) {
    let [next, value] = graph[node][i];
    let cost = dist[node] + value;

    if (!visited[next] && cost > dist[next]) {
      dist[next] = cost;
      dfs(next);
    }
  }
}
