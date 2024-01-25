function solution(brown, yellow) {
    let divisors = findDivisors(brown + yellow)
    
    for (let divisor of divisors) {
        const [width, height] = divisor;
        
        if ((width * 2) + ((height - 2) * 2) === brown) {
            return divisor;
        }
    }
}

function findDivisors(n) {
    let divisors = [];
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if (i >= Math.floor(n / i) ) {
                divisors.push([i, Math.floor(n / i)]);
            }   
        }
    }
    
    return divisors;
}