function solution(numbers, target) {
    let answer = 0;
        
    const getAnswer = (cnt, num) => {
        if (cnt < numbers.length) {
            getAnswer(cnt + 1, num + numbers[cnt]);
            getAnswer(cnt + 1, num - numbers[cnt]);
        } else {
            if (num === target) {
                answer++;
            }
        }
    }
    
    getAnswer(0, 0);

    return answer;
}