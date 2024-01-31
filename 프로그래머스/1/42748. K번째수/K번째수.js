function solution(array, commands) {
    let answer = [];
    
    for (const [i, j, k] of commands) {
        const newArray = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(newArray[k - 1]);
    }
    
    return answer;
}