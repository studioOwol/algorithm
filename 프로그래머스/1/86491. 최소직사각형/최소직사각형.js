function solution(sizes) {
    let x = Math.max(...sizes.map(size => Math.max(...size)));
    let y = Math.max(...sizes.map(size => Math.min(...size)));
    
    return x * y;
}