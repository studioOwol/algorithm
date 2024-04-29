function solution(arr) {
    let cnt = [0, 0];
    let n = arr.length; 
    
    const recursion = (r, c, n) => {
        let num = arr[r][c];
        let isSame = true;
        
        for (let i = r; i < r + n; i++) {
            for (let j = c; j < c + n; j++) {
                if (arr[i][j] !== num) {
                    isSame = false;
                    break;
                }
            }
        }
        
        if (isSame) {
            cnt[num]++;
            return;
        }
        
        n /= 2;
        recursion(r, c, n);
        recursion(r + n, c, n);
        recursion(r, c + n, n);
        recursion(r + n, c + n, n);
    }
    
    recursion(0, 0, n);

    return cnt;
}

