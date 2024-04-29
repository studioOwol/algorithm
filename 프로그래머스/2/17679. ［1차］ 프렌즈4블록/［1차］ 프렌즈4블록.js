let directions = [[0,1],[1,0],[1,1]];
let count = 0;
let visited;

function solution(m, n, board) {
    var answer = 0;
    let splitBoard = board.map(el => el.split(''));
    
    recursiveSolve(m, n, splitBoard);
    answer = count;
    
    return answer;
}

function recursiveSolve(m, n, board) {
    visited = Array.from(new Array(m), () => new Array(n).fill(false));
    let flag = false;
    
    for (let r = 0; r < m - 1; r++) {
        for (let c = 0; c < n -1; c++) {
            
            if (board[r][c] === 0) {
                continue;
            }
            
            if(isCrush(r, c, board)) {
                flag = true;
            }
        }
    }
    
    if (flag) {
        let crushBoard = getCrushBoard(m, n, board);
        fallDown(m, n, crushBoard);
        recursiveSolve(m, n, crushBoard);
    }
}

function getCrushBoard(m, n, board) {
    let crushBoard = Array.from(new Array(m), () => new Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (visited[r][c]) {
                count++;
                crushBoard[r][c] = 0;
            } else {
                crushBoard[r][c] = board[r][c];
            }
        }
    }
    
    return crushBoard;
}

function fallDown(m, n, crushBoard) {
    for (let r = m - 2; r >= 0; r--) {
        for (let c = 0; c < n; c++) {
            let str = crushBoard[r][c];
            if (str === 0) {
                continue;
            }
            let tmpR = r;
            while(true) {
                if (tmpR < m-1 && crushBoard[tmpR + 1][c] == 0) {
                    tmpR++;
                } else {
                    break;
                }
            }
            crushBoard[r][c] = 0;
            crushBoard[tmpR][c] = str;
        }
    }
}

function isCrush(r,c,board) {
    let str = board[r][c];
    let flag = true;
    
    for (let direction of directions) {
        let newR = r + direction[0];
        let newC = c + direction[1];
        if (board[newR][newC] !== str) {
            flag = false;
            break;
        }
    }
    
    if (flag) {
        visited[r][c] = true;
        for (let direction of directions) {
            let newR = r + direction[0];
            let newC = c + direction[1];
            visited[newR][newC] = true;
        }
    }
    return flag;
}
