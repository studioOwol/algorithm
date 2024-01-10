function solution(orders, course) {
    const ordered = {};
    const candidates = {};
    const maxNum = Array(11).fill(0);
    const createSet = (arr, start, len, menus) => {
        if (len === 0) {
            ordered[menus] = (ordered[menus] || 0) + 1;
            
            if (ordered[menus] > 1) candidates[menus] = ordered[menus];
            maxNum[menus.length] = Math.max(maxNum[menus.length], ordered[menus]);
            return;
        }
        
        for (let i = start; i < arr.length; i += 1) {
            createSet(arr, i + 1, len -1, menus + arr[i]);
        }
    };
    
    orders.forEach(order => {
        const sorted = order.split('').sort();
        course.forEach(len => {
            createSet(sorted, 0, len, '');
        });
    });
    
    const result = Object.keys(candidates).filter(combi => maxNum[combi.length] === candidates[combi]);
    
    return result.sort();
}