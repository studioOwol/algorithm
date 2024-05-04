function solution(weights) {
    let combi = Array(2);
    let result = 0;
    let cntArr = Array(1001).fill(0);
    let set = [...new Set(weights)]
    
    // 무게마다 개수세기
    weights.forEach(v => {
        cntArr[v]++;
    });
    
    // 동일한 무게를 짝짓는 경우의 수
    set.forEach(v => {
        result += Math.floor((cntArr[v] * (cntArr[v] - 1)) / 2)
    });

    set.sort((a, b) => a - b);

    const getCombinations = (start, depth) => {
        if (depth === 2) {
            if (4 * combi[0] === 3 * combi[1] ||
                4 * combi[0] === 2 * combi[1] ||
                3 * combi[0] === 2 * combi[1]
            ) {
                result += cntArr[combi[0]] * cntArr[combi[1]];
            }
            return;
        }
        
        for (let i = start; i < set.length; i++) {
            combi[depth] = set[i];
            getCombinations(i + 1, depth + 1);
        }
    }
    
    getCombinations(0,0);
    
    return result;
}