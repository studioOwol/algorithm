function solution(edges) {
    let result = Array(4).fill(0);
    if (edges.length === 0) return result;
    
    let maxNodes = 100_0000;
    let outCnt = Array(maxNodes + 1).fill(0);
    let inCnt = Array(maxNodes + 1).fill(0);
    let rootNode = -1;
    
    
    for (let [outNode, inNode] of edges) {
        outCnt[outNode]++;
        inCnt[inNode]++;
    }
    
    // 루트 정점 찾기 = 생성한 정점
    for (let idx = 1; idx <= maxNodes; idx++) {
        if (inCnt[idx] === 0 && outCnt[idx] > 0) {
            if (rootNode === -1 || outCnt[idx] > outCnt[rootNode]) {
                rootNode = idx;
            }
        }
    }
    
    if (rootNode === -1) return result;

    let total = outCnt[rootNode];
    let eightCnt = 0;
    let stickCnt = 0;
    
    // 8자 그래프와 막대 그래프 개수 구하기
    for (let i = 1; i <= maxNodes; i++) {
        if (inCnt[i] >= 2 && outCnt[i] === 2) {
            eightCnt++;
        }
        
        if (inCnt[i] > 0 && outCnt[i] === 0) {
            stickCnt++;
        }
    }
    
    result[0] = rootNode;
    result[1] = total - stickCnt - eightCnt;
    result[2] = stickCnt;
    result[3] = eightCnt;
    
    return result;
}