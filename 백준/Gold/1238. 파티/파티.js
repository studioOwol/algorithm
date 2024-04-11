let [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [N, M, X] = t.split(' ').map(Number);
let linkedInfo = input.map((el) => el.split(' ').map(Number));
let graph = Array.from({ length: N + 1 }, () => []);
let result = [];
let answer = Array(N + 1).fill(0);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value, priority) {
    this.heap.push([value, priority]);
    this.bubbleUp();
  }

  pop() {
    if (this.isEmpty()) {
      return 0;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return minValue;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);

      if (this.heap[parentIdx][1] > this.heap[index][1]) {
        this.swap(index, parentIdx);
        index = parentIdx;
      } else {
        break;
      }
    }
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;
      let smallerIdx = index;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx][1] < this.heap[smallerIdx][1]
      ) {
        smallerIdx = leftIdx;
      }

      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx][1] < this.heap[smallerIdx][1]
      ) {
        smallerIdx = rightIdx;
      }

      if (smallerIdx !== index) {
        this.swap(index, smallerIdx);

        index = smallerIdx;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

linkedInfo.forEach(([start, end, weight]) => {
  graph[start].push([end, weight]);
});

for (let i = 1; i <= N; i++) {
  dijkstra(i);
}

for (let i = 1; i <= N; i++) {
  if (i === X) continue;

  answer[i] = result[X - 1][i] + result[i - 1][X];
}

console.log(Math.max(...answer));

function dijkstra(start) {
  let dist = Array(N + 1).fill(Infinity);
  let minHeap = new MinHeap();
  minHeap.push(start, 0);
  dist[start] = 0;

  while (!minHeap.isEmpty()) {
    let [cur, d] = minHeap.pop();

    if (dist[cur] < d) continue;

    for (let [node, weight] of graph[cur]) {
      let cost = d + weight;
      if (cost < dist[node]) {
        dist[node] = cost;
        minHeap.push(node, cost);
      }
    }
  }

  result.push(dist);
}
