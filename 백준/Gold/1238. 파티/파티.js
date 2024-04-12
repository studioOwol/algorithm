let [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [N, M, X] = t.split(' ').map(Number);
let linkedInfo = input.map((el) => el.split(' ').map(Number));
let graph = Array.from({ length: N + 1 }, () => []);
let revGraph = Array.from({ length: N + 1 }, () => []);
let max = 0;

// 연결 정보 그래프 생성
linkedInfo.forEach(([start, end, weight]) => {
  graph[start].push([end, weight]);
  revGraph[end].push([start, weight]);
});

// X 노드에서 각 노드로 가는 최단경로
let dist = dijkstra(graph);
// 각 노드에서 X 노드로 가는 최단경로
let revDist = dijkstra(revGraph);

for (let i = 1; i <= N; i++) {
  let sum = dist[i] + revDist[i];
  max = Math.max(max, sum);
}

console.log(max);

function dijkstra(graph) {
  let queue = [[X, 0]];
  let dist = Array(N + 1).fill(Infinity);
  dist[X] = 0;

  while (queue.length) {
    let [cur, d] = queue.shift();

    if (dist[cur] < d) continue;

    for (let [node, weight] of graph[cur]) {
      let cost = d + weight;
      if (cost < dist[node]) {
        dist[node] = cost;
        queue.push([node, dist[node]]);
      }
    }
  }

  return dist;
}
