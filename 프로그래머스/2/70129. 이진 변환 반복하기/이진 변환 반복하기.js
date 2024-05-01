function solution(s) {
    let binCnt = 0, zeroCnt = 0;
    
    while (s !== '1') {
        binCnt++;
        let num = (s.match(/1/g) || []).length;
        zeroCnt += s.length - num;
        s = num.toString(2);
    }
    
    return [binCnt, zeroCnt];
}