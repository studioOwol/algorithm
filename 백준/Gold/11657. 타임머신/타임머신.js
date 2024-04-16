let [[N, M], ...edges] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

console.log(bellmanFord().join('\n'));

function bellmanFord() {
  let INF = 1e300;
  let dist = Array(N + 1).fill(INF);
  dist[1] = 0;

  for (let i = 0; i < N; i++) {
    for (let [start, end, cost] of edges) {
      if (dist[end] > dist[start] + cost) {
        dist[end] = dist[start] + cost;

        if (i === N - 1) {
          return [-1];
        }
      }
    }
  }

  return dist.slice(2).map((v) => (v === INF ? -1 : v));
}
