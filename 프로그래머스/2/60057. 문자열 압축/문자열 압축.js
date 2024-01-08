function solution(s) {
    let result = [];
    
    if (s.length === 1) return 1;
    
    for (let i = 1; i <= s.length; i += 1) {
        let compressed = '';
        let current = s.slice(0, i);
        let cnt = 1;
        
        for (let j = i; j <= s.length; j += i) {
            let next = s.slice(j, j + i);
            
            if (current === next) {
                cnt += 1;
            } else {
                compressed += cnt > 1 ? cnt + current : current;
                current = next;
                cnt = 1;
            }
        }
        
        compressed += cnt > 1 ? cnt + current : current;
        result.push(compressed.length);
    }
    
    return Math.min(...result);
}