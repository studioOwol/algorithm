function solution(genres, plays) {
    const genreCnt = {};
    const songCnt = {};

    genres.forEach((genre, idx) => {
        genreCnt[genre] = (genreCnt[genre] || 0) + plays[idx];
        songCnt[genre] = [...(songCnt[genre] || []), { index: idx, plays: plays[idx] }];
    });

    const genreOrder = Object.keys(genreCnt).sort((a, b) => genreCnt[b] - genreCnt[a]);

    const sortedSong = {};
    
    for (const genre in songCnt) {
        sortedSong[genre] = songCnt[genre].sort((a, b) => b.plays - a.plays).slice(0, 2);
    }
    
    const answer = genreOrder.reduce((answer, genre) => answer.concat(sortedSong[genre].map(item => item.index)), []);
    
    return answer;
}