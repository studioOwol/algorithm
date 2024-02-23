const [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, m] = t;
let graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(0);
let cnt = 0;

for (let i = 0; i < m; i++) {
  let [start, end] = inputs[i];

  graph[start].push(end);
  graph[end].push(start);
}

const bfs = (start) => {
  let queue = [start];
  visited[start] = true;

  while (queue.length) {
    let node = queue.shift();

    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
};

for (let i = 1; i < n + 1; i++) {
  if (!visited[i]) {
    bfs(i);
    cnt++;
  }
}

console.log(cnt);
