function solution(cap, n, deliveries, pickups) {
    let d = 0;
    let p = 0;
    let result = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        d -= deliveries[i];
        p -= pickups[i];
        
        while (d < 0 || p < 0) {
            d += cap;
            p += cap;
            
            result += (i + 1) * 2;
        }
    }
    
    return result;
}
