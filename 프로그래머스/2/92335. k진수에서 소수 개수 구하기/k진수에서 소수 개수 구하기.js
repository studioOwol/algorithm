let N;
let K;

function solution(n, k) {
    N = n;
    K = k;
    let result = 0;
    
    let converted = convertDecimal().split('0');
    
    for (let num of converted) {
        if (isPrime(Number(num))) {
            result++;
        }
    }
    
    return result;
}

function convertDecimal() {
    if (N === 0) {
        return '0'
    }
    
    let result = '';
    let num = N;
    
    while (num > 0) {
        let remainder = num % K;
        result = remainder + result;
        num = Math.floor(num / K);
    }
    
    return result;
}

function isPrime(num) {
    if (num === 1 || !num) return false;
    
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}