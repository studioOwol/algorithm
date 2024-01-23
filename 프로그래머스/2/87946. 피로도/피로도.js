function solution(k, dungeons) {
    let visited = Array(dungeons.length).fill(false);
    let result = 0;
    
    function dfs(cnt, k) {
        result = Math.max(cnt, result);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (k >= dungeons[i][0] && !visited[i]) {
                visited[i] = true;
                dfs(cnt + 1, k - dungeons[i][1]);
                visited[i] = false;
            }
        }
    }
    
    dfs(0, k);
    
    return result;
}