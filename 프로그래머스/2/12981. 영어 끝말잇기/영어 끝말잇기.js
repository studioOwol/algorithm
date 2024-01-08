function solution(n, words) {
    let stack = [words[0]];
    let num = 0;
    let turn = 0;
    let lastWord = words[0].slice(-1)
    
    for(let i = 1; i < words.length; i += 1) {
        if (!stack.includes(words[i]) && lastWord === words[i].charAt(0)) {
            stack.push(words[i]);
            lastWord = words[i].slice(-1);
        } else {
            num = (i % n) + 1;
            turn = Math.floor(i / n) + 1;
            break;
        }
    }
    
    return [num, turn];
}