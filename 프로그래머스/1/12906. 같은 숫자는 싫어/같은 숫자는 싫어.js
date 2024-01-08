function solution(arr)
{
    let answer = [];
    
    arr.forEach(element => {
        if(!answer || answer[answer.length - 1] !== element) {
            answer.push(element)
        }
    });
    
    return answer
}