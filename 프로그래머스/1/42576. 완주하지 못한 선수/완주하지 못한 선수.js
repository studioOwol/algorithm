function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i = 0; i < participant.length; i += 1) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}