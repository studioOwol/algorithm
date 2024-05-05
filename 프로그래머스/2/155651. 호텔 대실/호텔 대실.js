function solution(book_time) {
    book_time = book_time.map(v => {
        let [start, end] = v
        let [startH, startM] = start.split(':').map(Number);
        let [endH, endM] = end.split(':').map(Number);
        
        return [startH * 60 + startM, endH * 60 + endM];
    });
    
    book_time.sort((a, b) => a[0] - b[0]);
    let rooms = [book_time[0]];

    for(i = 1; i < book_time.length; i++){
        let flag = true;
        for(j = 0; j < rooms.length; j++){
            if(rooms[j][1]+10 <= book_time[i][0]){
                rooms[j] = book_time[i];
                flag = false;
                break;
            }            
        }

        if(flag){
            rooms.push(book_time[i]);
        }
   }

    return rooms.length;
}