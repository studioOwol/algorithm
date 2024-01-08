function solution(s) {
    let quotient = Math.floor(s.length / 2);
    let remainder = s.length % 2;
    let answer = '';
    
    if (remainder === 0) {
        answer = s.slice(quotient - 1, quotient + 1);
    } else {
        answer = s.charAt(quotient);
    }
    
    return answer;
}