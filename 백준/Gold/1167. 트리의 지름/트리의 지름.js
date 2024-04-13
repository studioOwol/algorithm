let [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(t);
let graph = Array.from({ length: N + 1 }, () => []);
let result = 0;
let maxNode = 0;

input.forEach((v) => {
  let [start, ...linkInfo] = v
    .slice(0, v.length - 3)
    .split(' ')
    .map(Number);

  for (let i = 0; i < linkInfo.length; i += 2) {
    graph[start].push([linkInfo[i], linkInfo[i + 1]]);
  }
});

dfs(1, 0, 0);
dfs(maxNode, 0, 0);
console.log(result);

function dfs(node, parent, dist) {
  if (dist > result) {
    result = dist;
    maxNode = node;
  }

  for (let [next, cost] of graph[node]) {
    if (next !== parent) {
      dfs(next, node, dist + cost);
    }
  }
}
