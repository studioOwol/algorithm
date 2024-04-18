let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let index = 0;

while (true) {
  let [M, N] = input[index++].split(' ').map(Number);

  if (M === 0 && N === 0) break;

  let parents = Array.from({ length: N + 1 }, (_, idx) => idx);
  let edges = [];

  for (let i = 0; i < N; i++) {
    edges.push(input[index++].split(' ').map(Number));
  }

  let totalCost = 0;
  let minCost = 0;
  // 가중치 기준으로 오름차순 정렬
  edges.sort((a, b) => a[2] - b[2]);

  edges.forEach((edge) => {
    let [start, end, cost] = edge;
    totalCost += cost;

    if (union(start, end)) {
      minCost += cost;
    }
  });

  console.log(totalCost - minCost);

  // 부모 노드를 찾는 함수
  function find(node) {
    if (node === parents[node]) {
      return node;
    }

    return find(parents[node]);
  }

  // 부모 노드가 다르면 작은 값의 노드를 부모 노드로 갱신 => 트리를 합친다.
  function union(node1, node2) {
    // 부모 노드
    node1 = find(node1);
    node2 = find(node2);

    if (node1 < node2) {
      parents[node2] = node1;
      return true;
    }

    if (node1 > node2) {
      parents[node1] = node2;
      return true;
    }

    return false;
  }
}
