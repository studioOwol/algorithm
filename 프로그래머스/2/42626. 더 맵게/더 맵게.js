function solution(scoville, K) {
    const minHeap = new MinHeap();
    
    for (const sco of scoville) {
        minHeap.push(sco);
    }
    
    let mixedCnt = 0;
    
    // 힙 안에 음식이 2개 이상 존재하고, 스코빌 지수가 가장 작은 음식의 지수가 K보다 작을 때까지 반복
    while (minHeap.size() >= 2 && minHeap.peek() < K) {
        // 스코빌 지수가 가장 작은 두 음식을 섞기
        const first = minHeap.pop();
        const second = minHeap.pop();
        const mixedFood = first + second * 2;
        minHeap.push(mixedFood);
        mixedCnt++;
    }
    
    // 모든 음식의 스코빌 지수를 K 이상으로 만들었으면 mixedCnt, 불가능한 경우 -1 반환
    return minHeap.peek() >= K ? mixedCnt : -1;
}

class MinHeap {
    // 힙을 저장할 배열
    constructor() {
        this.heap = [];
    }
    
    // 힙의 크기를 반환하는 메서드
    size() {
        return this.heap.length;
    }
    
    // 힙의 루트 요소를 반환하는 메서드, 최소값 또는 최대값
    peek() {
        return this.heap[0];
    }
    
    push(value) {
        // 새로운 요소를 힙의 끝에 추가
        this.heap.push(value);
        // 새로 추가된 요소의 인덱스를 저장
        let index = this.heap.length - 1;
        
        // 새로운 요소가 루트가 아니고, 부모 노드보다 작아질 때까지 부모와 위치를 교환
        while ( index > 0 && this.heap[index] < this.heap[Math.floor((index - 1) / 2)]) {
            // Math.floor((index - 1) / 2) : index의 부모 노드
            const temp = this.heap[index];
            this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
            this.heap[Math.floor((index - 1) / 2)] = temp;
            // 부모 노드의 인덱스로 올라감
            index = Math.floor((index - 1) / 2);
        }
    }
    
    pop() {
        // 힙이 비어있으면 null 반환, 힙에 요소가 하나만 있을 경우 해당 원소가 최소값이므로 제거하고 반환
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        // 현재 루트에 위치한 요소를 최소값으로 설정
        const minValue = this.heap[0];
        // 루트에 가장 마지막에 추가된 요소를 넣고 힙에서 제거
        this.heap[0] = this.heap.pop();
        // 인덱스 초기화
        let index = 0;
        
        // 현재 노드가 최소 한 개 이상의 자식을 가지고 있는 동안 반복
        // index * 2 + 1 = 왼쪽 자식 노드의 인덱스, this.heap.length = 현재 힙에 저장된 요소 개수
        while (index * 2 + 1 < this.heap.length) {
            
            // 오른쪽 자식 노드가 존재하고 && 왼쪽 자식 노드 값과 비교하여 작으면 오른쪽 자식을 선택, 그렇지 않으면 왼쪽 자식을 선택
            let minChildIndex = (index * 2 + 2 < this.heap.length && this.heap[index * 2 + 2] < this.heap[index * 2 + 1]) ? index * 2 + 2 : index * 2 + 1;
            
            // 현재 노드의 값이 자식 중에서 가장 작은 값보다 작으면 while 종료 = 최소값이면
            if (this.heap[index] < this.heap[minChildIndex]) {
                break;
            }
            
            // 현재 노드의 값과 최소값을 가진 자식의 값을 교환한다.
            const temp = this.heap[index];
            this.heap[index] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            // 최소값을 가진 자식 노드의 인덱스로 내려감
            index = minChildIndex;
        }
        
        // 최초에 저장해둔 최소값을 반환
        return minValue;
    }
}