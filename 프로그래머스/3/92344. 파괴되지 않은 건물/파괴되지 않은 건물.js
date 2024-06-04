function solution(board, skill) {
    let cntArr = Array.from({length: board.length + 1}, () => Array(board[0].length + 1).fill(0));
    let result = 0;
    let N = board.length;
    let M = board[0].length;
    
    for (let i = 0; i < skill.length; i++) {
        let [s, r1, c1, r2, c2, d] = skill[i];
    
        if (s === 1) {
            cntArr[r1][c1] -= d;
            cntArr[r1][c2 + 1] += d;
            cntArr[r2 + 1][c1] += d;
            cntArr[r2 + 1][c2 + 1] -= d;
        } else {
            cntArr[r1][c1] += d;
            cntArr[r1][c2 + 1] -= d;
            cntArr[r2 + 1][c1] -= d;
            cntArr[r2 + 1][c2 + 1] += d;
        }
    }
    
    for (let i = 0; i < N; i++) {
        for (let j = 1; j < M + 1; j++) {
            cntArr[i][j] += cntArr[i][j - 1];
        }
    }
    
    for (let i = 1; i < N + 1; i++) {
        for (let j = 0; j < M; j++) {
            cntArr[i][j] += cntArr[i - 1][j];
        }
    }
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] + cntArr[i][j] > 0) {
                result++;
            }
        }
    }
    
    return result;
}