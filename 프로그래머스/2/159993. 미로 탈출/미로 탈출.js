function solution(maps) {
    let start;
    let exit;
    let lever;
    let visited;
    let ds = [[0, 1], [-1, 0], [0, -1], [1, 0]];
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[i].length; j++) {
            if (maps[i][j] === 'S') {
                start = [i, j, 0];
            }
            
            if (maps[i][j] === 'L') {
                lever = [i, j, 0];
            }
            
            if (maps[i][j] === 'E') {
                exit = [i, j];
            }
        }
    }
    
    const bfs = (start, end) => {
        let queue = [start];
        visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(false))
        visited[start[0]][start[1]] = true;
        
        while (queue.length) {
            let [cr, cc, time] = queue.shift();
            
            if (cr === end[0] && cc === end[1]) {
                return time; 
            }
            
            for (let d of ds) {
                let nr = cr + d[0];
                let nc = cc + d[1];
                
                if (!(0 <= nr && nr < maps.length && 0 <= nc && nc < maps[0].length)) {
                    continue;
                }
                
                if (!visited[nr][nc] && maps[nr][nc] !== 'X') {
                    visited[nr][nc] = true;
                    queue.push([nr, nc, time + 1]);  
                }
            }
        }
        
        return -1;
    }    
    
    let first = bfs(start, lever);
    let second = bfs(lever, exit);
    
    if (0 < first && 0 < second) {
        return first + second;
    } else {
        return -1;
    }
}