function solution(n) {
    let cnt = 0;
    
    for (let i = 1; i < n + 1; i += 1) {
        if (n % i === 0 && i % 2 === 1) {
            cnt++;
        }
    }
    
    return cnt;
}
