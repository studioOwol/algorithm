function solution(want, number, discount) {
    let wantMap = {};
    let result = 0;
    
    want.forEach((product, idx) => {
        wantMap[product] = number[idx];
    });
    
    for (let i = 0; i <= discount.length - 10; i += 1) {
        let availables = discount.slice(i, i + 10);
        let discountMap = {};
        
        for (let product of availables) {
            if (Object.keys(wantMap).includes(product)) {
               discountMap[product] = (discountMap[product] || 0) + 1;
            }
        }
        
        if (Object.keys(discountMap).length === Object.keys(wantMap).length &&
            Object.keys(discountMap).every(product => discountMap[product] >= wantMap[product])) {
            result++;
        }
    }
    
    return result;
}