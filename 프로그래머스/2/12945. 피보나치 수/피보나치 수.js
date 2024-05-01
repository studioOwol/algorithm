function solution(n) {
    let num1 = 0, num2 = 1;
    
    for (let i = 0; i < n; i++) {
        let temp = num1;
        num1 = num2;
        num2 = (temp + num2) % 1234567;
    }
    
    return num1
}