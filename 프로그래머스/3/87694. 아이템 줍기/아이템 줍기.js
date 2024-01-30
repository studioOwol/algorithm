function solution(rectangle, characterX, characterY, itemX, itemY) {
    let graph = Array.from({length: 102}, () => Array(102).fill(0));
    let doubleRec = rectangle.map(rec => rec.map(point => point * 2));
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    
    doubleRec.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1; i <= x2; i++) {
            for(let j = y1; j <= y2; j++) {
                if (i === x1 || i === x2 || j === y1 || j === y2) {
                    if (graph[i][j] === 0) {
                        graph[i][j] = 1;
                    } 
                } else {
                    graph[i][j] = 2;
                }
            }
        }
    });
    
    let queue = [[characterX, characterY, 0]];
    graph[characterX][characterY] = 0;
    
    while (queue.length) {
        const [x, y , cnt] = queue.shift();
        
        if (x === itemX && y === itemY) {
            return cnt / 2;
        }
        
        for (let direction of directions) {
            let nx = x + direction[0];
            let ny = y + direction[1];
            
            if (graph[nx][ny] === 1) {
                queue.push([nx, ny, cnt + 1]);
                graph[nx][ny] = 0;
            }
        }
    }
    
    return 0;
}