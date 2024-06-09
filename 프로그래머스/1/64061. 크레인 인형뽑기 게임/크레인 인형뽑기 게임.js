function solution(board, moves) {
    let stack = [];
    let result = 0;
    
    for (let move of moves) {
        for (let r = 0; r < board.length; r++) {
            let doll = board[r][move - 1];
            
            // 인형이 없으면 다음 행으로 이동
            if (doll === 0) {
                continue;
            }
            
            // 바구니가 비어있으면 인형 담기
            if (stack.length === 0) {
                stack.push(doll);
                board[r][move - 1] = 0;
            } else {
                if (stack[stack.length - 1] !== doll) {
                    stack.push(doll);
                } else {
                    stack.pop();
                    result += 2;
                }
                board[r][move - 1] = 0;
            }
            break;
        }
    }
    
    
    
    return result;
}