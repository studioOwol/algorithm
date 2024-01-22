function solution(n, computers) {
    let visited = Array(n).fill(false);
    let answer = 0;
    
    for (let i = 0; i < n; i ++) {
        if (!visited[i]) {
            bfs(i);
            answer++;
        }
    }
    
    function bfs(node) {
        let queue = [];
        queue.push(computers[node]);
        
        while (queue.length) {
            let computer = queue.shift();
            
            for (let i = 0; i < n; i++) {
                if (computer[i] === 1 && !visited[i]) {
                    visited[i] = true;
                    queue.push(computers[i]);
                }
            }
        }
    }
    
    return answer;
}