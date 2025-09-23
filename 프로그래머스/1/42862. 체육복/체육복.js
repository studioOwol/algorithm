function solution(n, lost, reserve) {
    let saved = [];
    
    const newLost = lost.filter(num => !reserve.includes(num)).sort((a, b) => a - b);
    const newReserve = reserve.filter(num => !lost.includes(num)).sort((a, b) => a - b);
    
    newLost.forEach(lostNum => {
        const foundIdx = newReserve.findIndex(reserveNum => Math.abs(lostNum - reserveNum) === 1);
        
        if (foundIdx !== -1) {
            saved.push(lostNum);
            newReserve.splice(foundIdx, 1);
        }
    });
    
    return n - newLost.length + saved.length;
}