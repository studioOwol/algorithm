function solution(n) {
    let num1 = 1, num2 = 2;
    
    for (let i = 1; i < n; i++) {
        let temp = num1;
        num1 = num2;
        num2 = (temp + num2) % 1234567
    }
    
    return num1;
}