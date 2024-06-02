let combi = Array(4);
let infos;
let infoMap = {};
let queries;
let result = [];

function solution(info, query) {
    queries = query.map(v => v.replaceAll('and ', '').split(' '));
    infos = info.map(v => v.split(' '));
    
    for (let i = 0; i < infos.length; i++) {
        getCombinations(0, 0, infos[i]);    
    }
    
    Object.values(infoMap).map((v) => v.sort((a, b) => a - b));

    countResult();
    
    return result;
}

function countResult() {
    for (let query of queries) {
        let cnt = 0;
        let [c1, c2, c3, c4, score] = query;
        let queryKey = [c1, c2, c3, c4].join(' ');
        
        if (!infoMap[queryKey]) {
            result.push(0);
            continue;
        }
        
        let scoresArr = infoMap[queryKey];
        
        binarySearch(scoresArr, Number(score), 0, scoresArr.length);
    }
}

function binarySearch(arr, target, left, right) {
    let mid = 0;
    
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        
        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    result.push(arr.length - left);
}

function getCombinations(start, depth, arr) {
    if (depth === 4) {
        let key = combi.join(' ');
        
        if (!infoMap[key]) {
            infoMap[key] = [];
        }
        
        infoMap[key].push(Number(arr[4]));
        
        return;
    }
    
    for (let i = start; i < 4; i++) {
        combi[depth] = arr[i];
        getCombinations(i + 1, depth + 1, arr);
        combi[depth] = '-';
        getCombinations(i + 1, depth + 1, arr);
    }
}
       