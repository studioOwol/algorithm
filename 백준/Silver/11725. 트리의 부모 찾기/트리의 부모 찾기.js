let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = +input.shift();
let graph = Array.from({ length: N + 1 }, () => []);
let parent = Array(N + 1).fill(0);
let visited = Array(N + 1).fill(false);
let answer = '';

input.forEach((v) => {
  let [a, b] = v.split(' ').map(Number);

  graph[a].push(b);
  graph[b].push(a);
});

dfs(1);

for (let i = 2; i <= N; i++) {
  answer += parent[i] + '\n';
}

console.log(answer.trim());

function dfs(startNode) {
  const stack = [{ node: startNode, parentNode: 0 }];

  while (stack.length) {
    const { node, parentNode } = stack.pop();

    if (visited[node]) continue;
    visited[node] = true;

    parent[node] = parentNode;

    for (let next of graph[node]) {
      if (!visited[next]) {
        stack.push({ node: next, parentNode: node });
      }
    }
  }
}
