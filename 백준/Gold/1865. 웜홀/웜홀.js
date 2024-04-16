let [t, ...cases] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [tc] = t;
let index = 0;
let graph;
let INF = 1e9;

for (let k = 0; k < tc; k++) {
  let [N, M, W] = cases[index++].split(' ').map(Number);

  graph = Array.from({ length: N + 1 }, () => []);

  // 도로 정보 저장
  for (let i = 0; i < M; i++) {
    let [start, end, cost] = cases[index++].split(' ').map(Number);

    graph[start].push({ to: end, cost: cost });
    graph[end].push({ to: start, cost: cost });
  }

  // 웜홀 정보 저장
  for (let j = 0; j < W; j++) {
    let [start, end, cost] = cases[index++].split(' ').map(Number);

    graph[start].push({ to: end, cost: -cost });
  }

  console.log(bellmanFord(N, graph) ? 'YES' : 'NO');
}

function bellmanFord(N, graph) {
  let dist = Array(N + 1).fill(INF);
  dist[1] = 0;

  // N번 순회
  for (let i = 0; i < N; i++) {
    // 각 노드를 순회
    for (let j = 1; j <= N; j++) {
      for (let { to, cost } of graph[j]) {
        if (dist[to] > dist[j] + cost) {
          dist[to] = dist[j] + cost;

          if (i === N - 1) {
            return true;
          }
        }
      }
    }
  }

  return false;
}
