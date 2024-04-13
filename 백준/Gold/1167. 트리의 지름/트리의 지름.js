let [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(t);
let graph = Array.from({ length: N + 1 });
graph[0] = [];
let visited = Array(N + 1).fill(false);
let result = 0;
let maxNode = 0;

input.forEach((v) => {
  let [start, ...linkInfo] = v.split(' ').map(Number);
  linkInfo.pop();

  for (let i = 0; i < linkInfo.length; i += 2) {
    graph[start] = linkInfo;
  }
});

dfs(1, 0, 0);
visited.fill(0);
dfs(maxNode, 0, 0);
console.log(result);

function dfs(node, parent, dist) {
  visited[node] = true;

  if (dist > result) {
    result = dist;
    maxNode = node;
  }

  for (let i = 0; i < graph[node].length - 1; i += 2) {
    let [next, cost] = [graph[node][i], graph[node][i + 1]];
    if (next !== parent && !visited[next]) {
      dfs(next, node, dist + cost);
    }
  }
}
