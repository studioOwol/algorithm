function solution(k, dungeons) {
    let visited = Array.from({length: dungeons.length}).fill(false);
    let result = [];
    
    const dfs = (cnt, depth, k, dungeons, visited) => {
        if (depth === dungeons.length) {
            result.push(cnt);
            return;
        }
        
        for (let i = 0; i < dungeons.length; i++) {
            
            if (visited[i] === false) {
                visited[i] = true;
                if (k >= dungeons[i][0]) {
                    dfs(cnt+1, depth+1, k-dungeons[i][1], dungeons, visited);
                }
                else {
                    dfs(cnt, depth+1, k, dungeons, visited);
                }
                visited[i] = false;
            }
            
        }
    }
    
    dfs (0, 0, k, dungeons, visited);
    
    return Math.max(...result);
}