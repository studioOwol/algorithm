let R;
let C;
let visited;
let ds = [[0, 1], [0, -1], [1, 0], [-1, 0]];
let answer = [];

function solution(maps) {
    R = maps.length;
    C = maps[0].length;
    
    visited = Array.from({length: R}, () => Array(C).fill(false));
    
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (!maps[i][j]) {
                visited[i][j] = true;
            }
        }
    }
    
    return bfs(maps);
}

function bfs(maps) {
    let queue = [[0, 0, 1]];
    visited[0][0] = true;
    
    while (queue.length) {
        let [r, c, cnt] = queue.shift();
        
        if (r === R - 1 && c === C - 1) {
            return cnt;
        }
        
        for (let d of ds) {
            let nr = r + d[0];
            let nc = c + d[1];
            
            if (!(0 <= nr && nr < R && 0 <= nc && nc < C)) {
                continue;
            }

            if (!visited[nr][nc]) {
                visited[nr][nc] = true;
                queue.push([nr, nc, cnt + 1]);
            }
        }
    }
    
    return -1;
}