function solution(brown, yellow) {
    let answer = [];
    
    for (let i = 3; i <= (brown+yellow)/i; i++) {
        let x = Math.floor((brown+yellow)/i);
        if( (x-2)*(i-2)=== yellow) {
            answer.push(x, i)
            break;
        }
    }
    
    return answer;
}