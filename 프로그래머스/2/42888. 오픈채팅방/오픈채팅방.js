function solution(record) {
    let log = {};
    let result = [];
    
    for (let r of record) {
        let [command, id, name] = r.split(' ');
        
        if (command === 'Enter') {
            log[id] = name;
        }
        
        if (command === 'Change') {
            log[id] = name;
        }
    }

    for (let r of record) {
        let [command, id, _] = r.split(' ');
        
        if (command === 'Enter') {
            result.push(`${log[id]}님이 들어왔습니다.`)
        }
        
        if (command === 'Leave') {
            result.push(`${log[id]}님이 나갔습니다.`)
        }
    }
    
    return result
}