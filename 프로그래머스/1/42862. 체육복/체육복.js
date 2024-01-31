function solution(n, lost, reserve) {
    let answer = [];
    
    const newLost = lost.filter(num => !reserve.includes(num)).sort((a, b) => a - b);
    const newReserve = reserve.filter(num => !lost.includes(num)).sort((a, b) => a - b);
    
    newLost.forEach(lostNum => {
        newReserve.forEach((reserveNum, idx) => {
            if (Math.abs(lostNum - reserveNum) === 1) {
                answer.push(lostNum);
                newReserve.splice(idx, 1);
            }
        });
    });
    
    return n - newLost.length + answer.length;
}