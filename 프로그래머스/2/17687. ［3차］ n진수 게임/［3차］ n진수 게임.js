function solution(n, t, m, p) {
    let converted = '';
    let result = '';
    
    for (let i = 0; i < t * m; i++) {
        converted += (i).toString(n);
    }
    
    for (let i = p - 1; i < converted.length; i += m) {
        result += converted[i];
        
        if (result.length === t) break;
    }
    
    return result.toUpperCase();
}