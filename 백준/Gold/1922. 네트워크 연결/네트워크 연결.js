let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(input[0]);
let M = Number(input[1]);
let edges = input.slice(2).map((el) => el.split(' ').map(Number));
// 부모 노드 초기화 => 처음에는 자기자신으로
let parents = Array.from({ length: N + 1 }, (_, idx) => idx);
let minCost = 0;
// 가중치 기준으로 오름차순 정렬
edges.sort((a, b) => a[2] - b[2]);

edges.forEach((edge) => {
  let [start, end, cost] = edge;

  if (union(start, end)) {
    minCost += cost;
  }
});

console.log(minCost);

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
