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
    
    return String(Math.floor(time / 60)).padStart(2, '0') + ':' + String(time % 60).padStart(2, '0')
}


