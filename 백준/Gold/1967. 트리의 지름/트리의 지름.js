let [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = +t;
let graph = Array.from({ length: N + 1 }, () => []);
let visited = Array(N + 1).fill(false);
let result = 0;
let maxNode = 0;

input.forEach((v) => {
  let [a, b, cost] = v.split(' ').map(Number);

  graph[a].push([b, cost]);
  graph[b].push([a, cost]);
});

dfs(1, 0, 0);
visited.fill(false);
dfs(maxNode, 0, 0);
console.log(result);

function dfs(node, parent, dist) {
  visited[node] = true;

  if (dist > result) {
    result = dist;
    maxNode = node;
  }

  for (let [next, value] of graph[node]) {
    if (!visited[next] && next !== parent) {
      dfs(next, node, dist + value);
    }
  }
}
