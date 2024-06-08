function solution(n, arr1, arr2) {
    let result = [];
    
    for (let i = 0; i < n; i++) {
        let bin1 = arr1[i].toString(2).padStart(n, '0');
        let bin2 = arr2[i].toString(2).padStart(n, '0');
        let row = '';
        
        for (let j = 0; j < n; j++) {
            if (bin1[j] === '1' || bin2[j] === '1') {
                row += '#'
            }
            
            if (bin1[j] === '0' && bin2[j] === '0') {
                row += ' ';
            }
        }
        
        result.push(row);
    }
    
    return result;
}