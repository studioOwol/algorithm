function solution(n, t, m, timetable) {
    let time = 540;
    
    timetable = timetable.map(time => {
        let [hour, min] = time.split(':').map(Number);
        return hour * 60 + min;
    }).sort((a, b) => a - b);
    
    for (let i = 0; i < n; i++) {
        let krewLen = timetable.filter(v => v <= time).length;
        
        // 마지막 버스인 경우
        if (i === n - 1) {
            if (krewLen >= m) {
                time = timetable[m - 1] - 1;
            }
        } else {
            timetable.splice(0, krewLen > m ? m : krewLen);
            time += t;
        }
    }
    
    return makeNumToTime(time);
}

function makeNumToTime(num) {
    let hour = Math.floor(num / 60);
    let min = num % 60;
    
    if (hour < 10 && min < 10) {
        return `0${hour}:0${min}`;
    }
    
    if (hour >= 10 && min < 10) {
        return `${hour}:0${min}`;
    }
    
    if (hour < 10 && min >= 10) {
        return `0${hour}:${min}`;
    }
    
    if (hour >= 10 && min >= 10) {
        return `${hour}:${min}`;
    }
}

// 셔틀은 09:00부터 총 n회 t분 간격으로 도착, 도착한 순간에 자리가 있다면 대기열에 선 크루도 탈 수 있음
// 도착 시각 중 제일 늦은 시각
// 같은 시각에 도착한 크루중 대기열 제일 뒤에 선다
// 1 <= timetable <= 2000
// 아이디어
// 1. 시각을 분으로 환산하고 timetable 오름차순 정렬
