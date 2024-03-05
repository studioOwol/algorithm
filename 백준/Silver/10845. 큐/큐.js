let [n, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

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

  enqueue(value) {
    let newNode = new Node(value);
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
      return -1;
    }

    let removedValue = this.front.data;
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    this.size--;

    return removedValue;
  }

  getFront() {
    return this.front ? this.front.data : -1;
  }

  getBack() {
    return this.rear ? this.rear.data : -1;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  getSize() {
    return this.size;
  }
}

let commands = inputs.map((el) => el.split(' '));
let queue = new Queue();
let result = [];

for (let command of commands) {
  if (command[0] === 'push') {
    queue.enqueue(Number(command[1]));
    continue;
  }

  if (command[0] === 'pop') {
    result.push(queue.dequeue());
  }

  if (command[0] === 'front') {
    result.push(queue.getFront());
  }

  if (command[0] === 'back') {
    result.push(queue.getBack());
  }

  if (command[0] === 'size') {
    result.push(queue.getSize());
  }

  if (command[0] === 'empty') {
    result.push(queue.isEmpty());
  }
}

console.log(result.join('\n'));
