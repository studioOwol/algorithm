let [[V, E], ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

class PriorityQueue {
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

let graph = Array.from({ length: V + 1 }, () => []);

input.forEach((v) => {
  let [start, end, cost] = v;

  graph[start].push({ next: end, cost: cost });
  graph[end].push({ next: start, cost: cost });
});

let result = 0;

console.log(prim());

function prim() {
  let visited = Array(V + 1).fill(false);
  let pq = new PriorityQueue();

  pq.push(1, 0);

  while (!pq.isEmpty()) {
    let [node, p] = pq.pop();

    if (visited[node]) {
      continue;
    }

    visited[node] = true;
    result += p;

    for (let { next, cost } of graph[node]) {
      if (!visited[next]) {
        pq.push(next, cost);
      }
    }
  }

  return result;
}
