function solution(n) {
    let cnt = 0;
    
    if (n % 2 === 0) {
        for (let i = 1; i < n + 1; i++) {
            if (n % i === 0 && i % 2 !== 0) {
                cnt++;
            }
        }
    } else {
        for (let i = 1; i < n + 1; i++) {
            if (n % i === 0) {
                cnt++;
            }
        }
    }
    
    return cnt;
}
