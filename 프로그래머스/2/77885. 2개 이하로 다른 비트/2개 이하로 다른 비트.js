function solution(numbers) {
    let answer = [];
    
    
    for (let num of numbers) {
        if (num % 2 === 0) {
            answer.push(num + 1);
            continue;
        }
        
        let flag = false;
        let binary = num.toString(2).split('');
        
        for (let i = binary.length - 1; i >= 0; i--) {
            if (binary[i] === '0') {
                flag = true;
                binary[i] = '1';
                binary[i + 1] = '0';
                break;
            }
        }
        
        if (!flag) {
            binary[0] = '0';
            answer.push(parseInt('1' + binary.join(''), 2));
        } else {
            answer.push(parseInt(binary.join(''), 2))
        }
    };
    
    return answer;
}
