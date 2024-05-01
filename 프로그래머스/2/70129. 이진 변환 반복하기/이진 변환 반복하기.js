function solution(s) {
    let binCnt = 0, zeroCnt = 0;
    
    while (s !== '1') {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0') {
                zeroCnt++;
            }
        }
        
        binCnt++;
        s = s.split('').filter(x => x !== '0').join('');
        s = (s.length).toString(2);
    }
    
    return [binCnt, zeroCnt];
}