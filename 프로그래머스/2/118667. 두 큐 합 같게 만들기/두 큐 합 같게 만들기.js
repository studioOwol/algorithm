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

  push(item) {
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

  pop() {
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

function solution(queue1, queue2) {
    let q1 = new Queue();
    let q2 = new Queue();
    
    queue1.forEach(v => q1.push(v));
    queue2.forEach(v => q2.push(v));
    
    let sum1 = queue1.reduce((acc, v) => acc + v, 0);
    let sum2 = queue2.reduce((acc, v) => acc + v, 0);
    let result = 0;
    
    if (sum1 === sum2) return 0;
    
    let limit = (queue1.length + queue2.length) * 2;
    
    while (limit-- > 0) {
        if (sum1 < sum2) {
            let popped2 = q2.pop();
            sum2 -= popped2;
            sum1 += popped2;
            q1.push(popped2);
            result++;
        }
        
        if (sum1 > sum2) {
            let popped1 = q1.pop();
            sum1 -= popped1;
            sum2 += popped1;
            q2.push(popped1);
            result++;
        }
        
        if (sum1 === sum2) {
            return result;
        }
    }
    
    return -1;
}