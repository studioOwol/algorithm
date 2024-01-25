function solution(n, wires) {
    let visited = Array(n + 1).fill(false);
    let graph = Array.from({length: n + 1}, () => []);
    let result = Infinity;
    
    for (const [start, end] of wires) {
        graph[start].push(end);
        graph[end].push(start);
    }
    
    for (let i = 0; i < wires.length; i++) {
        const [start, end] = wires[i];
        graph[start] = graph[start].filter(node => node !== end);
        graph[end] = graph[end].filter(node => node !== start);
        
        dfs(1);
        
        const totalCnt = visited.slice(1).filter((value) => value).length;
        result = Math.min(result, Math.abs(totalCnt - (n - totalCnt)));
        
        graph[start].push(end);
        graph[end].push(start);
        visited = Array(n + 1).fill(false);
    }
    
    function dfs(start) {
        visited[start] = true;
        for (let node of graph[start]) {
            if (!visited[node]) {
                dfs(node);
            }
        }
    };
    
    return result;
}