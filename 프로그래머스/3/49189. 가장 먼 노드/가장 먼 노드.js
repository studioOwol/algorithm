let visited;
let graph;
let dist;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(item) {
    const newNode = new Node(item);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    const removedItem = this.front.data;
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    this.size--;
    return removedItem;
  }

  peek() {
    return this.front ? this.front.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

function solution(n, edge) {
    graph = Array.from({length: n + 1}, () => []);
    visited = Array(n + 1).fill(false);
    dist = Array(n + 1).fill(0);
    
    edge.forEach(e => {
        let [start, end] = e;
        
        graph[start].push(end);
        graph[end].push(start);
    });
    
    bfs();
    
    let max = Math.max(...dist);
    
    return dist.filter(v => v === max).length;
}

function bfs() {
    let queue = new Queue();
    queue.enqueue(1);
    visited[1] = true;

    while (!queue.isEmpty()) {
        let cur = queue.dequeue();
        
        for (let node of graph[cur]) {
            if (!visited[node]) {
                visited[node] = true;
                dist[node] += dist[cur] + 1;
                queue.enqueue(node);
            }
        }
    }
}