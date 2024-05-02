function solution(s) {
    let arr = s.split('');
    let cnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        let temp = arr[0];
        
        for (let j = 0; j < s.length; j++) {
            arr[j] = arr[j + 1];
        }
        arr[s.length - 1] = temp; 
        
        if (isRightParen(arr)) {
            cnt++;
        }
    }
    
    return cnt;
}

function isRightParen(arr) {
    let stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0) {
            stack.push(arr[i])
            continue;
        }
        
        if (stack[stack.length - 1] === '(') {
            if (arr[i] === ')') {
                stack.pop();
            } else {
                stack.push(arr[i])
            }
        } else if (stack[stack.length - 1] === '{') {
            if (arr[i] === '}') {
                stack.pop();
            } else {
                stack.push(arr[i]);
            }
        } else if (stack[stack.length - 1] === '[') {
            if (arr[i] === ']') {
                stack.pop();
            } else {
                stack.push(arr[i]);
            }
        }
        
    }
    
    if (!stack.length) {
        return true;
    } else {
        return false;
    }
}