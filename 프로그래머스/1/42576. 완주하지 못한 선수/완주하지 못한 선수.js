function solution(participant, completion) {
    const participantMap = new Map();
    
    participant.forEach(name => {
        participantMap.set(name, (participantMap.get(name) || 0) + 1);
    });
    
    completion.forEach(name => {
        participantMap.set(name, participantMap.get(name) - 1);
        
        if(participantMap.get(name) === 0) {
            participantMap.delete(name);
        }
    });
    
    return [...participantMap.keys()][0]
}