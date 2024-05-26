let answer = [];
let N;
let infos;
let combi;
let rianArr;

function solution(n, info) {
    N = n;
    infos = info;
    combi = Array(N)
    
    getCombination(0, 0);
    
    answer.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0];
        }
        
        return b[1] - a[1];
    });
    
    if (answer[0][0] <= 0) {
        return [-1];
    }
    
    return answer[0][2];
}

function getResult() {
    let tmpN = N;
    let scoreR = 0;
    let scoreA = 0;
    let maxIdx = -1;
    
    for (let i of combi) {
        let cnt = infos[i] + 1;
        
        if (cnt <= tmpN) {
            rianArr[i] = cnt;
            scoreR += (10 - i);
            tmpN -= cnt;
            maxIdx = Math.max(maxIdx, i);
        }
    }
    
    if (tmpN > 0) {
        rianArr[10] = tmpN;
    }
    
    
    for (let i = 0; i < 11; i++) {
        if (0 < infos[i] && rianArr[i] <= infos[i]) {
            scoreA += (10 - i);
        }
    }
    
    return [scoreR - scoreA, maxIdx, rianArr.slice()];
}

function getCombination(start, depth) {
    if (depth === N) {
        rianArr = Array(11).fill(0);
        answer.push(getResult());
        return;
    }
    
    for (let i = start; i < 11; i++) {
        combi[depth] = i;
        getCombination(i + 1, depth + 1);
    }
}