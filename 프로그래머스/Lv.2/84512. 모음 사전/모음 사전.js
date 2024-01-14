function solution(word) {
    let result = [];
    let vowel = 'AEIOU';
    
    const dfs = (cnt, str) => {
        if (cnt === 5) return;
        
        for (let i = 0; i < vowel.length; i++) {
            result.push(str + vowel[i]);
            dfs(cnt + 1, str + vowel[i]);
        }
    }
    
    dfs(0, '');
    
    return result.indexOf(word) + 1;
}