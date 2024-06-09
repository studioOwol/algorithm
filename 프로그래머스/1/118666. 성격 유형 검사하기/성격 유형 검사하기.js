function solution(survey, choices) {
    let scoreMap = {};
    let types = ['RT', 'CF', 'JM', 'AN'];
    
    // scoreMap 초기화
    types.forEach((type) => {
        type.split('').forEach((char) => scoreMap[char] = 0);
    });
    
    choices.forEach((choice, idx) => {
        let [no, yes] = survey[idx];
        
        scoreMap[choice > 4 ? yes : no] += Math.abs(choice - 4);
    });
    
    return types.map(([a, b]) => scoreMap[b] > scoreMap[a] ? b : a).join('');
}