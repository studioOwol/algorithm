

function solution(places) {
    let result = [];
    
    places.forEach(row => {
        result.push(bfs(row));
    });
    
    return result;
}

function bfs(row) {
    let start = [];
    let ds = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (row[i][j] === 'P') {
                start.push([i, j, 0])
            }
        }
    }
    
    for (let [r, c, distance] of start) {
        let visited = Array.from({length: 5}, () => Array(5).fill(false));
        let queue = [[r, c, distance]];
        visited[r][c] = true;
        
        while(queue.length) {
            let [cr, cc, dist] = queue.shift();
            
            for (let d of ds) {
                let nr = cr + d[0];
                let nc = cc + d[1];
                
                if (!(0 <= nr && nr < 5 && 0 <= nc && nc < 5)) {
                    continue;
                }
                
                if (!visited[nr][nc]) {
                    if (row[nr][nc] === 'O') {
                        visited[nr][nc] = true;
                        queue.push([nr, nc, dist + 1]);
                    }
                    
                    if (row[nr][nc] === 'P' && dist < 2) {
                        return 0;
                    }
                }
            }
        }
    };
    
    return 1;
}
