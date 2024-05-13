let map;
let ds = [[0, 1], [1, 0], [0, -1], [-1, 0]];
let visited;
let R;
let C;

function solution(board) {
    map = board.map(v => v.split(''));
    let start = [];
    R = map.length;
    C = map[0].length;
    visited = Array.from({length: R}, () => Array(C).fill(false));
    
    // R의 좌표 찾기
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (map[r][c] === 'R') {
                start = [r, c];
            }
        }
    }
    
    return bfs(...start)
}

function bfs(r, c) {
    let queue = [[r, c, 0]];
    
    while (queue.length) {
        let [cr, cc, cnt] = queue.shift();
        visited[cr][cc] = true;
        
        if (map[cr][cc] === 'G') {
            return cnt;
        }
        
        for (let d of ds) {
            let nr = cr + d[0];
            let nc = cc + d[1];
            
            while (0 <= nr && nr < R && 0 <= nc && nc < C && map[nr][nc] !== 'D') {
                nr += d[0];
                nc += d[1];
            }
            
            nr -= d[0];
            nc -= d[1];
            
            if (!visited[nr][nc]) {
                queue.push([nr, nc, cnt + 1]);
            }
        }
    }
    
    return -1;
}

