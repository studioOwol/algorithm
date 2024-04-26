function solution(p) {
 
    // 올바른 괄호 확인
    function rightParen(str) {
        let stack = [];
    
        for (let i = 0; i < str.length; i++) {
        if (stack.length === 0) {
            stack.push(str[i]);
            continue;
        }
        
        if (stack[stack.length - 1] === '(') {
            if (str[i] === ')') {
                    stack.pop();
            } else {
                    stack.push(str[i]);
                }
            } 
        }
        
        return stack.length
    }
        
    if (!rightParen(p)) return p;
    
    return recursion(p);
    
    function recursion(str) {
        if (str === '') return str;

        let leftCnt = 0, rightCnt = 0;
        let splitIdx = 0;
        
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                leftCnt++;
            } else {
                rightCnt++
            }
            
             if (leftCnt === rightCnt) {
                    splitIdx = i + 1;
                    break;
                }
        }
        
        let u = str.slice(0, splitIdx);
        let v = str.slice(splitIdx);
        
        if (rightParen(u) > 0) {
            return '(' + recursion(v) + ')' + makeNewStr(u);
        } else {
            return u + recursion(v);
        }
    }
    
    function makeNewStr(str) {
        let trimmed = str.substring(1, str.length - 1);
        
        if (trimmed.length !== 0) {
            trimmed = trimmed.split('').map(el => {
                if (el === '(') {
                    return ')'
                } else {
                    return '('
                }
            }).join('')
        }
        
        return trimmed
    }
}