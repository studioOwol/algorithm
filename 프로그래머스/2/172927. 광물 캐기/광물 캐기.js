function solution(picks, minerals) {
    let result = 0;
    let len = Math.ceil(minerals.length / 5);
    let maxLen = picks.reduce((a, b) => a + b);
    let arr = [];
    
    if (!maxLen) return 0;
    minerals = minerals.splice(0, maxLen * 5);
    
    for (let t = 0; t < len; t++) {
        let group = {d: 0, i: 0, s: 0};
        
        minerals.splice(0, 5).map(v => group[v[0]]++);
        
        arr.push([
            group.d + group.i + group.s,
            group.d * 5 + group.i + group.s,
            group.d * 25 + group.i * 5 + group.s
        ]);
    }
    
    arr
        .sort((a, b) => b[2] - a[2])
        .map(v => {
            if (picks[0] > 0) return picks[0]--, result += v[0];
            if (picks[1] > 0) return picks[1]--, result += v[1];
            if (picks[2] > 0) return picks[2]--, result += v[2];
    });
    
    return result;
}