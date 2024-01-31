function solution(genres, plays) {
    const genreCnt = {};
    const songCnt = {};

    genres.forEach((genre, idx) => {
        genreCnt[genre] = (genreCnt[genre] || 0) + plays[idx];
        songCnt[genre] = [...(songCnt[genre] || []), { index: idx, plays: plays[idx] }];
    });

    const genreOrder = Object.keys(genreCnt).sort((a, b) => genreCnt[b] - genreCnt[a]);

    const result = [];
    
    for (const genre of genreOrder) {
        const sortedSongs = songCnt[genre].sort((a, b) => {
            const aValue = b.plays - a.plays;
            return aValue !== 0 ? aValue : a.index - b.index;
        });
        result.push(...sortedSongs.slice(0, 2).map(song => song.index));
    }

    return result;
}