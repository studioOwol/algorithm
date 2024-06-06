function solution(fees, records) {
    let logMap = {};
    let [baseTime, baseFee, unitTime, unitFee] = fees;
    
    for (let r of records) {
        let [time, num, status] = r.split(' ');
        
        if(!logMap[num]) {
            logMap[num] = [];
        }
        
        logMap[num].push(calculateTime(time));
    }
    
    let result = Object.keys(logMap).sort((a, b) => a - b).map(num => {
        let diff = 0;
        if (logMap[num].length % 2 === 1) {
            logMap[num].push(calculateTime('23:59'));
        }
        
        for (let i = 0; i < logMap[num].length; i+= 2) {
            diff += logMap[num][i + 1] - logMap[num][i];
        }
        
        if (diff <= baseTime) {
            return baseFee;
        }
        
        return baseFee + Math.ceil((diff - baseTime) / unitTime) * unitFee;
    });
    
    return result;
}


function calculateTime(str) {
    let [hour, min] = str.split(':').map(Number);
    
    return hour * 60 + min
}

// 입차 후 출차된 내역 없으면 23:59 출차로 간주
// 초과 시간이 단위 시간으로 나누어 떨어지지 않으면 올림
// fees = [기본 시간, 기본 요금, 단위 시간, 단위 요금]
// records 요소 = 시각, 차량번호, 내역
// records는 시각을 기준으로 오름차순 정렬되어 주어짐
// 차량 번호가 작은 자동차부터 차례대로 배열에 담아 return

