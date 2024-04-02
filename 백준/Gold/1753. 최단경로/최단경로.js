const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getParentIndex = (childIndex) => {
    return Math.floor((childIndex - 1) / 2);
  };

  getLeftChildIndex = (parentIndex) => {
    return parentIndex * 2 + 1;
  };

  getRightChildIndex = (parentIndex) => {
    return parentIndex * 2 + 2;
  };

  swap = (idx1, idx2) => {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  };

  isEmpty = () => this.heap.length === 0;

  heapifyUp = () => {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[index].priority > this.heap[parentIndex].priority) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  };

  heapifyDown = () => {
    let index = 0;
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let swapIdx = null;

      // 왼쪽 자식 노드와 비교
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].priority < this.heap[index].priority
      ) {
        swapIdx = leftChildIndex;
      }

      // 오른쪽 자식 노드와 비교
      if (rightChildIndex < this.heap.length) {
        if (
          (swapIdx === null &&
            this.heap[rightChildIndex].priority < this.heap[index].priority) ||
          (swapIdx !== null &&
            this.heap[rightChildIndex].priority <
              this.heap[leftChildIndex].priority)
        ) {
          swapIdx = rightChildIndex;
        }
      }

      if (swapIdx === null) break;

      this.swap(index, swapIdx);
      index = swapIdx;
    }
  };

  enqueue = (value, priority) => {
    const node = new Node(value, priority);
    this.heap.push(node);
    this.heapifyUp();
  };

  dequeue = () => {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return min;
  };
}

const [V, E] = input[0].split(" ").map(Number);
const K = Number(input[1]);

const map = new Array(V + 1);

for (let i = 1; i <= V; i++) {
  map[i] = [];
}

for (let i = 2; i < E + 2; i++) {
  const [u, v, w] = input[i].split(" ").map(Number);
  map[u].push([v, w]);
}
const INF = Number.MAX_SAFE_INTEGER;
const distance = new Array(V + 1).fill(INF);

dijkstra();

function dijkstra() {
  const pq = new PriorityQueue();

  pq.enqueue(K, 0);
  distance[K] = 0;

  while (!pq.isEmpty()) {
    const { value, priority } = pq.dequeue();
    if (distance[value] < priority) continue; // 이미 처리된 정점
    for (let v of map[value]) {
      let cost = priority + v[1];
      if (cost < distance[v[0]]) {
        // 갱신
        distance[v[0]] = cost;
        pq.enqueue(v[0], cost);
      }
    }
  }
}

let ans = "";

for (let i = 1; i <= V; i++) {
  if (distance[i] === INF) ans += "INF";
  else ans += distance[i];
  ans += "\n";
}

console.log(ans);
