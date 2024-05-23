function solution(n, t, m, timetable) {
    let time = 540;
    
    timetable = timetable.map(v => {
        let [hour, min] = v.split(':').map(Number);
        
        return hour * 60 + min;
    }).sort((a, b) => a - b);
    
    for (let i = 0; i < n; i++) {
        // 현재 버스 시간에 탈 수 있는 크루 인원
        let krewLen = timetable.filter(v => v <= time).length;
        
        // 마지막 버스인 경우
        if (i === n - 1) {
            // 최대 수용 인원 이상이면
            if (krewLen >= m) {
                // 마지막으로 타는 크루보다 1분 일찍 도착해야 함
                time = timetable[m - 1] - 1;
            }
        } else {
            // 현재 버스에 krewLen이 최대 수용 인원 m보다 크면 m명의 크루를 태우고, 작으면 크루 전원 태우기
            timetable.splice(0, krewLen >= m ? m : krewLen);
            // 다음 버스 출발 시간 업데이트
            time += t;
        }
    }
    
    return String(Math.floor(time / 60)).padStart(2, '0') + ':' + String(time % 60).padStart(2, '0');
}