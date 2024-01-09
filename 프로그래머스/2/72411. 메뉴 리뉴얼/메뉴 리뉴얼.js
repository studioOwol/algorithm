function solution(orders, course) {
    let result = [];
  
    course.forEach(count => {
        const menuMap = new Map();
        const combiArr = [];
        let maxCount = 0;
        
        orders.forEach(order => {
            combiArr.push(...combinations(order, count, 0, ''));
        });
        
        countCombiMenus(combiArr, menuMap);
        findMaxCombi(menuMap, result);
    })
    
    return result.sort();
}

function findMaxCombi(menuMap, result) {
    let maxCount = 0;
    let maxCombis = [];
    
    menuMap.forEach((count, combi) => {
        if (count >= 2 && count >= maxCount) {
            if (count > maxCount) {
                maxCombis.length = 0;
            }
            
            maxCombis.push(combi);
            maxCount = count;
        }
    });
    
    result.push(...maxCombis);
}

function countCombiMenus(arr, menuMap) {
    for (const combi of arr) {
        if (menuMap.has(combi)) {
            menuMap.set(combi, menuMap.get(combi) + 1);
        } else {
            menuMap.set(combi, 1);
        }
    }
    
    return menuMap;
}

function combinations(str, length, start = 0, current = '') {
    const combis = [];
    
    if (length === 0) {
        combis.push(current.split('').sort().join(''));
        return combis;
    }
    
    for (let i = start; i < str.length; i++) {
        const newCurrent = current + str[i];
        combis.push(...combinations(str, length -1, i + 1, newCurrent));
    }
    
    return combis;
}