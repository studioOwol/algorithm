function solution(s) {
    s = s.replaceAll('{', "").replaceAll('}',"").split(',');
    let map = {};
    
    for (let num of s) {
        map[num] = (map[num] || 0) + 1;
    }
    
    return Object.keys(map).sort((a, b) => map[b] - map[a]).map(Number);
}
