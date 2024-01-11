function solution(m, musicinfos) {
    m = convertMelody(m);
    let maxTime = 0;
    let answer = '(None)';
    
    musicinfos.forEach(info => {
        let [start, end, title, melody] = info.split(',');
        melody = convertMelody(melody);
        
        const [startHour, startMin] = start.split(':').map(Number);
        const [endHour, endMin] = end.split(':').map(Number);
        
        let playTime = ((endHour * 60 + endMin) - (startHour * 60 + startMin));
        
        let fullMelody = (melody.repeat(Math.floor(playTime / melody.length)))
        + (melody.slice(0, playTime % melody.length));
        
        if (fullMelody.includes(m) && playTime > maxTime) {
            answer = title;
            maxTime = playTime;
        }
    });
    
    return answer;
}

function convertMelody(m) {
   return m.replaceAll('C#', 'c').replaceAll('D#', 'd').replaceAll('A#', 'a').replaceAll('F#', 'f').replaceAll('G#', 'g');
}