function solution(s) {
    const words = s.split(' ');
    
    Array.from({length: words.length}, (_, i) => {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    });
    
    return words.join(' ');
}