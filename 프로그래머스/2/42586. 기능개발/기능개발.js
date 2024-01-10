function solution(progresses, speeds) {
    let stack = [];
    let result = [];
    
    progresses.forEach((progress, idx) => {
        let restDays = Math.ceil((100 - progress) / speeds[idx]);

        if (stack.length === 0) {
            stack.push(restDays);
            
        } else {
            if (stack[0] >= restDays) {
                stack.push(restDays);
            } else {
                result.push(stack.length);
                stack = [];
                stack.push(restDays);
            }
        }
    });
    
    result.push(stack.length);
    
    return result;
}