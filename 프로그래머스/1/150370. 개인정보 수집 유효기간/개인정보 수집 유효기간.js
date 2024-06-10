function solution(today, terms, privacies) {
    let termsMap = {};
    let result = [];
    let [ty, tm, td] = today.split('.').map(Number);
    let tdays = convertToDays(ty, tm, td);

    terms.forEach(term => {
        let [type, time] = term.split(' ');
        
        termsMap[type] = Number(time) * 28;
    });
    
    for (let i = 0; i < privacies.length; i++) {
        let [date, type] = privacies[i].split(' ');
        let [y, m, d] = date.split('.').map(Number);
        let days = convertToDays(y, m, d);

        if (days + termsMap[type] <= tdays) {
            result.push(i + 1);
        }
    }
    
    return result;
}

function convertToDays(y, m, d) {
    return y * 12 * 28 + m * 28 + d;
}