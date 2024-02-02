function solution(number, k) {
    let stack = [];
    
    for (let i = 0; i < number.length; i++) {
        const num = number[i];
        
        while (k > 0 && stack[stack.length - 1] < num) {
            stack.pop();
            k--;
        }
        
        stack.push(num);
    }
    
    return stack.join('').slice(0, stack.length - k);
}