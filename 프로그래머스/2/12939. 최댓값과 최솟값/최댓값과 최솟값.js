function solution(s) {
    const numbers = s.split(' ');
    const minNum = Math.min(...numbers);
    const maxNum = Math.max(...numbers);
    
    return minNum + ' ' + maxNum;
}