function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    let visited = Array.from({length: words.length}, () => false);
    let queue = [[begin, 0]];
    
    function bfs() {
        while(queue.length) {
            const [word, cnt] = queue.shift();
            
            if (word === target) {
                return cnt;
            }
            
            for(let i = 0; i < words.length; i++) {
                if (visited[i]) {
                    continue;
                }
                
                let tmpWord = words[i];
                let tmpCnt = 0;
                
                for (let j = 0; j < word.length; j++) {
                    if (word[j] === tmpWord[j]) {
                        tmpCnt++;
                    }
                }
                
                if (tmpCnt === word.length - 1 && !visited[i]) {
                    visited[i] = true;
                    queue.push([tmpWord, cnt + 1]);
                }
            }
        }
    }
    
    return bfs();
}