function solution(n) {
    let result = [];
    let sum = (n * (n + 1)) / 2;
    
    let arr = Array.from({length: n}, () => []);
    
    for (let i = 0; i < n; i++) {
        arr[i] = Array(i + 1).fill(0);
    }
    
    const recursion = (r, limitR, c, number) => {
        if (number > sum) return;
        
        for (let i = r; i < limitR; i++) {
            arr[i][c] = number++;
        }
        
        for (let i = c; i <= limitR - c; i++) {
            arr[limitR][i] = number++;
        }
        
        for (let i = limitR - 1; i > r; i--) {
            arr[i][i - c] = number++;
        }
        
        recursion(r + 2, limitR - 1, c + 1, number);
    }
    
    recursion(0, n - 1, 0, 1);
    
    let idx = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let num of arr[i]) {
            result[idx++] = num;
        }
    }
    
    return result;
}