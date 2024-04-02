let [ve, k, ...rest] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [V, E] = ve.split(' ').map(Number);
let start = +k;
let linkedInfo = rest.map((el) => el.split(' ').map(Number));
let graph = Array.from({ length: V + 1 }, () => new Map());
let distance = Array(V + 1).fill(Infinity);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);

    while (this.heap[parentIdx] && this.heap[index] < this.heap[parentIdx]) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
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

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[index]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[index])
    ) {
      let smallerIdx = leftIdx;

      if (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[smallerIdx]) {
        smallerIdx = rightIdx;
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

for (let v of linkedInfo) {
  let [a, b, c] = v;

  graph[a].set(b, Math.min(c, graph[a].get(b) || Infinity));
}

dijkstra();

let answer = '';

for (let i = 1; i <= V; i++) {
  if (distance[i] === Infinity) {
    answer += 'INF';
  } else {
    answer += distance[i];
  }

  answer += '\n';
}

console.log(answer.trim());

function dijkstra() {
  let minHeap = new MinHeap();
  minHeap.push([0, start]);
  distance[start] = 0;

  while (!minHeap.isEmpty()) {
    let [dist, cur] = minHeap.pop();

    if (distance[cur] < dist) continue;

    for (let [next, cost] of graph[cur]) {
      if (dist + cost < distance[next]) {
        distance[next] = dist + cost;
        minHeap.push([dist + cost, next]);
      }
    }
  }
}
