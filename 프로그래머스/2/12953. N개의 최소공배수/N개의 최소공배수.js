function solution(arr) {
    // 두 수의 최소공약수 구하는 함수
    const getGCD = (a, b) => {
        if (b === 0) return a;
        return a > b ? getGCD(b, a % b) : getGCD(a, b % a);
    }
    
    // 두 수의 최소공배수 구하는 함수
    const getLCM = (a, b) => {
        return (a * b) / getGCD(a, b);
    }
    
    return arr.reduce((next, cur) => getLCM(next, cur), 1);
}