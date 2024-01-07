function solution(s) {
    const numbers = s.split(' ').map(Number);
    const minNum = String(Math.min(...numbers));
    const maxNum = String(Math.max(...numbers));
    
    return minNum + ' ' + maxNum;
}