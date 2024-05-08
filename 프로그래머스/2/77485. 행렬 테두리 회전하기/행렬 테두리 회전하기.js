function solution(rows, columns, queries) {
    let matrix = [];
    let num = 1;
    let result = [];
    
    // 행렬 만들기
    for (let i = 0; i < rows; i++) {
        let row = [];
        
        for (let j = 0; j < columns; j++) {
            row.push(num++);
        }
        
        matrix.push(row);
    }
    
    const rotate = ([r1, c1, r2, c2]) => {
        r1--; c1--; r2--; c2--;
        
        let temp = matrix[r1][c1];
        let min = temp;
        
        // 왼쪽
        for (let i = r1; i < r2; i++) {
            matrix[i][c1] = matrix[i + 1][c1];
            min = Math.min(min, matrix[i][c1]);
        }
        
        // 아래쪽
        for (let i = c1; i < c2; i++) {
            matrix[r2][i] = matrix[r2][i + 1];
            min = Math.min(min, matrix[r2][i]);
        }
        
         // 오른쪽
        for (let i = r2; i > r1; i--) {
            matrix[i][c2] = matrix[i - 1][c2];
            min = Math.min(min, matrix[i][c2]);
        }
        
        // 위쪽
        for (let i = c2; i > c1; i--) {
            matrix[r1][i] = matrix[r1][i - 1];
            min = Math.min(min, matrix[r1][i]);
        }
        
        matrix[r1][c1 + 1] = temp;
        
        return min
    }
    
    for (let v of queries) {
        result.push(rotate(v));
    }
    
    return result;
}

