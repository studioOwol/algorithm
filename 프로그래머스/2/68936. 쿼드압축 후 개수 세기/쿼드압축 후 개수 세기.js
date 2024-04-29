function solution(arr) {
    let cnt = [0, 0];
    let n = arr.length;
    
    const recursion = (r, c, n) => {
        let total = 0;
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                total += arr[r + j][c + i];
            }
        }
        
        if (total === 0) {
            cnt[0]++;
        } else if (total === n * n) {
            cnt[1]++;
        } else {
            n /= 2;
            recursion(r, c, n);
            recursion(r + n, c, n);
            recursion(r, c + n, n);
            recursion(r + n, c + n, n);
        }
    }
    
    recursion(0, 0, n);
    
    return cnt;
}

