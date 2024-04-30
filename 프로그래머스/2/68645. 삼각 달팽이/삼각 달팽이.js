function solution(n) {
    let sum = (n * (n + 1)) / 2;
    let arr = Array.from({length: n}, () => []);
    
    for (let i = 0; i < n; i++) {
        arr[i] = Array(i + 1).fill(0);
    }
    
    const recursion = (r, limitR, c, number) => {
        // 숫자가 블록의 숫자보다 커지면 종료(=블록이 다 채워지면)
        if (number > sum) return;
        
        // 왼쪽으로 내려가면서 숫자를 채운다.
        for (let i = r; i < limitR; i++) {
            arr[i][c] = number++;
        }
        
        // 맨 아랫층 숫자를 채운다.
        for (let i = c; i <= limitR - c; i++) {
            arr[limitR][i] = number++;
        }
        
        // 오른쪽으로 올라가면서 숫자를 채운다.
        for (let i = limitR - 1; i > r; i--) {
            arr[i][i - c] = number++;
        }
        
        // 시작층 + 2, 마지막층 - 1, 시작열 + 1
        recursion(r + 2, limitR - 1, c + 1, number);
    }
    
    recursion(0, n - 1, 0, 1);
    
    return arr.flat();
}