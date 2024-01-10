function solution(record) {
    let log = {};
    let result = [];
    
    record.forEach(str => {
        const [status, id, name] = str.split(' ');
        
        if (status === 'Enter') {
            log[id] = name;
        }
        
        if (status === 'Change') {
            log[id] = name;
        }
    });
    
    record.forEach(str => {
        const [status, id, name] = str.split(' ');
        
        if (status === 'Enter') {
            result.push(`${log[id]}님이 들어왔습니다.`);
        }
        
        if (status === 'Leave') {
            result.push(`${log[id]}님이 나갔습니다.`);
        }
    });
    
    return result;
}