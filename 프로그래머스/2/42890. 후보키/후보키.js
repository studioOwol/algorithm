let combi;
let arr;
let combis = [];

function solution(relation) {
    arr = relation;
    let result = []
    
    for (let i = 1; i <= arr[0].length; i++) {
        combi = Array(i);
        getCombinations(0, 0, i);
    }
    
    return combis.length
}

function getCombinations(start, depth, limit) {
    if (depth === limit) {
        if (checkMinimum() && checkUnique()) {
            combis.push(combi.slice())
        }
        
        return;
    }
    
    for (let i = start; i < arr[0].length; i++) {
        combi[depth] = i;
        getCombinations(i + 1, depth + 1, limit)
    }
}

function checkMinimum() {
    let flag = true
    if (!combis.length) return flag;
    
    for (let cb of combis) {
        if (cb.every(v => combi.includes(v))) {
            flag = false;
        }
    }
    
    return flag;
}

function checkUnique() {
    let set = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        let str = [];
        for (let j = 0; j < combi.length; j++) {
            str.push(arr[i][combi[j]])
        }
        
        set.add(str.join(','))
    }
    
    return set.size === arr.length
}