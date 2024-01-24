function solution(n, computers) {
    let visited = Array(n).fill(false);
    let cnt = 0;
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            cnt++;
        }
    }
    
    function dfs(node) {
        visited[node] = true;
        
        for (let i = 0; i < n; i++) {
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    return cnt;
}