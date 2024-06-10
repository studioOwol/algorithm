function solution(friends, gifts) {
    let records = {};
    let giftIndex = {};
    let result = {};
    
    for (let i = 0; i < friends.length; i++) {
        records[friends[i]] = {};
        giftIndex[friends[i]] = 0;
        result[friends[i]] = 0;
        
        for (let j = 0; j < friends.length; j++) {
            if (i !== j) {
                records[friends[i]][friends[j]] = 0;
            }
        }
    }
    
    gifts.forEach(g => {
        let [giver, taker] = g.split(' ');
         
        records[giver][taker]++;
        
        giftIndex[giver]++;
        giftIndex[taker]--;
    });
    
    for (let giver of friends) {
        for (let taker in records[giver]) {
            if (records[giver][taker] > records[taker][giver]) {
                result[giver]++;
                continue;
            }
            
            if (records[giver][taker] === records[taker][giver]) {
                if (giftIndex[giver] > giftIndex[taker]) {
                    result[giver]++;
                }
            }
        }  
    }
    
    return Math.max(...Object.values(result));
}