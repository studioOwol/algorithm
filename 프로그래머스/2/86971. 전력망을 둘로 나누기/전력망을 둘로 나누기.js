function solution(n, wires) {
    let visited = Array(n + 1).fill(false);
    let graph = Array.from({length: n + 1}, () => []);
    let min = Infinity;
    
    for (const [start, end] of wires) {
        graph[start].push(end);
        graph[end].push(start);
    }
    
    for (const [start, end] of wires) {
        graph[start].splice(graph[start].indexOf(end), 1);
        graph[end].splice(graph[end].indexOf(start), 1);
        
        let result = bfs();
        
        min = Math.min(min, Math.abs(result - (n - result)));
        
        visited = Array(n + 1).fill(false);
        
        graph[start].push(end);
        graph[end].push(start);
    }
    
    function bfs() {
        let queue = [1];
        let cnt = 1;
        visited[1] = true;
        
        while (queue.length) {
            let curNode = queue.shift();
            
            for (const tmpNode of graph[curNode]) {
                if (!visited[tmpNode]) {
                    visited[tmpNode] = true;
                    queue.push(tmpNode);
                    cnt++;
                }
            }
        }
        
        return cnt;
    }
    
    return min;
}