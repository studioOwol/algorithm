function solution(m, n, board) {
    board = board.map(el => el.split(''));
    
    while (true) {
        let find = [];
        
        for (let r = 0; r < m - 1; r++) {
            for (let c = 0; c < n - 1; c++) {
                let pick = board[r][c];
                
                if (pick &&
                    pick === board[r][c + 1] &&
                    pick === board[r + 1][c] &&
                    pick === board[r + 1][c + 1]
                ) {
                  find.push([r, c])  
                }
            }
        }
        
        
        if (!find.length) return board.flat().filter((v) => !v).length;
        
        find.forEach(([r, c]) => {
            board[r][c] = 0;
            board[r][c + 1] = 0;
            board[r + 1][c] = 0;
            board[r + 1][c + 1] = 0;
        });
        
        for (let r = m - 1; r >= 0; r--) {
            for (let c = 0; c < n; c++) {
                for (let i = r - 1; i >= 0; i--) {
                    if (board[r][c]) break;
                    
                    if (board[i][c]) {
                        board[r][c] = board[i][c];
                        board[i][c] = 0;
                        break;
                    }
                }
            }
        }
    }
}