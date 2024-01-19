function solution(priorities, location) {
    let queue = priorities.map((priority, idx) => [priority, idx]);
    let answer = 0;
    
    while (queue.length) {
        let maxPriority = Math.max(...queue.map(value => value[0]));
        
        if (queue[0][0] < maxPriority) {
            queue.push(queue.shift());
        } else {
            answer++;
            if (location === queue.shift()[1]) {
                break;
            }
        }
    }

    return answer;
}