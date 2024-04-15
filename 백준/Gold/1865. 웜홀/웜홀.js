let [t, ...cases] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [tc] = t;
let index = 0;
let graph;
let INF = 2 ** 50;

for (let k = 0; k < tc; k++) {
  let [N, M, W] = cases[index++];

  graph = Array.from({ length: N + 1 }, () => []);

  // 도로 정보 저장
  for (let i = 0; i < M; i++) {
    let [start, end, cost] = cases[index++];

    graph[start].push([end, cost]);
    graph[end].push([start, cost]);
  }

  // 웜홀 정보 저장
  for (let j = 0; j < W; j++) {
    let [start, end, cost] = cases[index++];

    graph[start].push([end, -cost]);
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
      for (let [next, cost] of graph[j]) {
        if (dist[next] > dist[j] + cost) {
          dist[next] = dist[j] + cost;

          // N번째 순회에서 갱신되는 값이 있으면 음수 사이클 존재
          if (i === N - 1) {
            return true;
          }
        }
      }
    }
  }

  return false;
}
