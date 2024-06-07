function solution(numbers) {
    let answer = [];
    
    for (let num of numbers) {
        if (num % 2 === 0) {
            answer.push(num + 1);
            continue;
        }
        let binNum = ('0' + num.toString(2)).split('');
        let lastIdx = binNum.lastIndexOf('0');
        
        binNum[lastIdx] = '1';
        binNum[lastIdx + 1] = '0';
        
        answer.push(parseInt(binNum.join(''), 2))
    };
    
    return answer;
}
