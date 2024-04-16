let [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [N, M] = t.split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => []);
let INF = 1e9;
let dist = Array(N + 1).fill(Infinity);

input.forEach((v) => {
  let [start, end, cost] = v.split(' ').map(Number);

  graph[start].push([end, cost]);
});

if (bellmanFord()) {
  console.log(-1);
  return;
}

for (let i = 2; i <= N; i++) {
  if (dist[i] === Infinity) {
    console.log(-1);
  } else {
    console.log(dist[i]);
  }
}

function bellmanFord() {
  dist[1] = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 1; j <= N; j++) {
      for (let [next, cost] of graph[j]) {
        if (dist[next] > dist[j] + cost) {
          dist[next] = dist[j] + cost;

          if (i === N - 1) {
            return true;
          }
        }
      }
    }
  }

  return false;
}
