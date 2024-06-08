function solution(N, stages) {
    let stageMap = {};
    let users = stages.length;
    let failMap = {};
    
    for (let i = 0; i <= N; i++) {
        stageMap[i + 1] = 0;
    }
    
    
    for (let stage of stages) {
        stageMap[stage]++;
    }
    
    for (let i = 1; i <= N; i++) {
        let cnt = stageMap[i];
        let failRate = cnt / users
        users -= cnt;
        failMap[i] = failRate;
    }
    
    let result = Object.keys(failMap).sort((a, b) => {
        if (failMap[a] !== failMap[b]) {
            return failMap[b] - failMap[a];
        }
        
        return failMap[a] - failMap[b];
    }).map(Number);
    
    return result;
}

