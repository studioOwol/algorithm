function solution(maps) {
    maps = maps.map(v => v.split("").map(v => v === 'X' ? 'X' : Number(v)));
    let visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(false));
    let dir = [[0, 1], [-1, 0], [0, -1], [1, 0]];
    let islands = [];
    let result = [];
    
    for (let r = 0; r < maps.length; r++) {
        for (let c = 0; c < maps[0].length; c++) {
            if (maps[r][c] === 'X') {
                visited[r][c] = true;
            } else {
                maps[r][c] = Number(maps[r][c]);
                islands.push([r, c]);
            }
        }
    }
    
    const bfs = (r, c) => {
        let queue = [[r, c]];
        let cnt = 0;
     
        while (queue.length) {
            let [cr, cc] = queue.shift();
            
            for (let d of dir) {
                let nr = cr + d[0];
                let nc = cc + d[1];
                
                if (!(0 <= nr && nr < maps.length && 0 <= nc && nc < maps[0].length)) {
                    continue;
                }
                
                if (!visited[nr][nc]) {
                    visited[nr][nc] = true;
                    cnt += Number(maps[nr][nc]);
                    queue.push([nr, nc]);
                }
            }
        }
        
        if (cnt > 0) {
            result.push(cnt);
        }
        
        if (visited[r][c] === false) {
            result.push(maps[r][c]);
        }
    }
    
    islands.forEach(([r, c]) => {
        bfs(r, c)
    })
    
    if (result.length === 0) {
        return [-1];
    } else {
        return result.sort((a, b) => a - b);
    }
}