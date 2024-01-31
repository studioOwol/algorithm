function solution(genres, plays) {
    let genreCnt = {};
    let songCnt = {};
    let sortedSong = {};
    let answer = [];
    
    genres.forEach((genre, idx) => {
        if (!genreCnt[genre] || !songCnt[genre]) {
            genreCnt[genre] = 0;
            songCnt[genre] = [];
        }
        
        genreCnt[genre] += plays[idx];
        songCnt[genre].push({ [idx]: plays[idx]});
    });
    
    let genreOrder = Object.keys(genreCnt).sort((a, b) => genreCnt[b] - genreCnt[a]);

    
    const sortSongs = (a, b) => {
        const aValue = Object.values(a)[0];
        const bValue = Object.values(b)[0];
        
        if (aValue > bValue) return -1;
        if (aValue < bValue) return 1;
        
        const aKey = Object.keys(a)[0];
        const bKey = Object.keys(b)[0];
        return aKey.localeCompare(bKey);
    }
    
    for (const key in songCnt) {
        sortedSong[key] = songCnt[key].sort(sortSongs).slice(0, 2);
    }
    
    genreOrder.forEach(genre => {
       sortedSong[genre].forEach(value => {
           answer.push(Number(Object.keys(value)[0]));
       });
    });
    
    return answer;
}