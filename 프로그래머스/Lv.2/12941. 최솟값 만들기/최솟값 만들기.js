function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((acc, value, idx) => acc + value * B[idx], 0);
}