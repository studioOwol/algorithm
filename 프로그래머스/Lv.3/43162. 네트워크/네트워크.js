function solution(n, computers) {
    let cnt = 0;
    let visited = Array(n).fill(false);

    function dfs(node) {
        visited[node] = true;
        
        for (let i = 0; i < n; i++) {
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i);
            cnt++;
        }
    }
    
    return cnt;
}