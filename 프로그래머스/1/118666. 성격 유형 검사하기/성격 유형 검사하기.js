function solution(survey, choices) {
    let typeMap = {'T': 0, 'R': 0, 'C': 0, 'F': 0, 'M': 0, 'J': 0, 'A': 0, 'N': 0};
    let result = [];
    
    for (let i = 0; i < survey.length; i++) {
        let query = survey[i];
        let choice = choices[i]
        let [first, second] = query.split('');
        
        // 첫 번째 캐릭터
        if (choice < 4) {
            if (choice === 3) {
                typeMap[first] += 1;
            }
            if (choice === 2) {
                typeMap[first] += 2;
            }
            if (choice === 1) {
                typeMap[first] += 3;
            }
        }
        // 두 번째 캐릭터
        if (choice > 4) {
            if (choice === 5) {
                typeMap[second] += 1;
            }
            if (choice === 6) {
                typeMap[second] += 2;
            }
            if (choice === 7) {
                typeMap[second] += 3;
            }
        }
    }
    
    let sorted = Object.keys(typeMap).sort((a, b) => {
        if (typeMap[a] !== typeMap[b]) {
            return typeMap[b] - typeMap[a];
        }
        
        return a.localeCompare(b);
    });
    
    result.push(sorted.filter(v => v === 'R' || v === 'T')[0]);
    result.push(sorted.filter(v => v === 'C' || v === 'F') [0]);
    result.push(sorted.filter(v => v === 'J' || v === 'M')[0]);
    result.push(sorted.filter(v => v === 'A' || v === 'N')[0]);
    
    return result.join('');
}