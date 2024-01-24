function solution(maps) {
    let visited = Array.from({length: maps.length}, () => Array.from({length: maps[0].length}, () => false));
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let queue = [[0, 0, 1]];
    
    visited[0][0] = true;
    
    function bfs() {
        while (queue.length) {
            const [x, y, cnt] = queue.shift();
            
            if (x === maps[0].length - 1 && y === maps.length - 1) {
                return cnt;
            }
            
            for (let direction of directions) {
                let nx = x + direction[0];
                let ny = y + direction[1];
                
                if (!(0 <= nx && nx < maps[0].length && 0 <= ny && ny < maps.length)) {
                    continue;
                }
                
                if (maps[ny][nx] === 1 && !visited[ny][nx]) {
                    visited[ny][nx] = true;
                    queue.push([nx, ny, cnt + 1]);
                }
            }
        }
        
        return -1;
    }
    
    return bfs();
}