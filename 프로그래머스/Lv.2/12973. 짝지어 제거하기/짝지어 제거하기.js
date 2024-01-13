function solution(s)
{
    let stack = [];
    
    for (let str of s) {
        if (stack.length === 0) {
            stack.push(str);
        } else {
            if (stack[stack.length - 1] !== str) {
                stack.push(str);
            } else {
                stack.pop();
            }
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}