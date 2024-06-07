function solution(dirs) {
    let visited = Array.from({length: 11}, () => Array.from({length: 11}, () => Array.from({length: 11}, () => Array(11).fill(false))));
    let start = [5, 5];
    let answer = 0;
    
    for (let d of dirs) {
        let [cr, cc] = start;
        let [nr, nc] = [cr, cc];
        
        if (d === 'U') {
            nr = cr - 1
        }
        
        if (d === 'D') {
            nr = cr + 1;
        }
        
        if (d === 'L') {
            nc = cc - 1;
        }
        
        if (d === 'R') {
            nc = cc + 1;
        }
        
        if (!(0 <= nr && nr < 11 && 0<= nc && nc < 11)) {
            continue;
        }
        
        start = [nr, nc];
        
        if (!visited[cr][cc][nr][nc] && !visited[nr][nc][cr][cc]) {
            visited[cr][cc][nr][nc] = true;
            visited[nr][nc][cr][cc] = true;
            answer++;
        };
    }
    
    return answer;
}
