function solution(m, n, board) {
    board = board.map(v => v.split(''));
    
    while (true) {
        let removes = [];
        
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                let pick = board[i][j];
            
                if (pick && 
                    pick === board[i][j + 1] &&
                    pick === board[i + 1][j] &&
                    pick === board[i + 1][j + 1]
                ) {
                    removes.push([i, j]);
                }
            }
        }
    
        if (!removes.length) return board.flat().filter(v => !v).length;
    
        // 지워질 블록을 0으로 바꾸기
        removes.forEach(([r, c]) => {
            board[r][c] = 0;
            board[r + 1][c] = 0;
            board[r][c + 1] = 0;
            board[r + 1][c + 1] = 0;
        });
    
        // 0인 블록을 지우고 위에서 블록 당겨오기
        for (let r = m - 1; r >= 0; r--) {
            for (let c = 0; c < n; c++) {
                for (let i = r - 1; i >= 0; i--) {
                    if (board[r][c]) break;
                
                    board[r][c] = board[i][c];
                    board[i][c] = 0;
                }
            }
        }
    }
}