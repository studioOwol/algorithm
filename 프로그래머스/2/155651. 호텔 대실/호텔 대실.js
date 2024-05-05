function solution(book_time) {
    book_time = book_time.map(v => {
        let [start, end] = v
        let [startH, startM] = start.split(':').map(Number);
        let [endH, endM] = end.split(':').map(Number);
        
        return [startH * 60 + startM, endH * 60 + endM];
    })
    
    book_time.sort((a, b) => a[0] - b[0]);
    let room = [];

    for (let i = 0; i < book_time.length; i++) {
        let [start, end] = book_time[i]
        let endTime = end + 10;
        let idx = -1;
        
        for (let j = 0; j < room.length; j++) {
            if (room[j] <= start) {
                idx = j;
                break;
            }
        }
        
        if (idx === -1) {
            room.push(endTime);
        } else {
            room[idx] = endTime;
        }
    }
    
    return room.length;
}