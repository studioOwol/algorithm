function solution(maps) {
    let n = maps.length;
    let m = maps[0].length;
    let visited = Array.from({length: n}, () => Array(m).fill(false));
    let ds = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let queue = [[0, 0, 1]];
    
    visited[0][0] = true;
    
    function bfs() {
        while(queue.length) {
            let [r, c, cnt] = queue.shift();
            
            if (r === n - 1 && c === m - 1) {
                return cnt;
            }
            
            for (let d of ds) {
                let [nr, nc] = [r + d[0], c + d[1]];
                
                if (!(0 <= nr && nr < n && 0 <= nc && nc < m)) continue;
                
                if (!visited[nr][nc] && maps[nr][nc]) {
                    visited[nr][nc] = true;
                    queue.push([nr, nc, cnt + 1]);
                }
            }
        }
        
        return -1;
    }
    
    return bfs();
}