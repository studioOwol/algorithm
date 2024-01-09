function solution(friends, gifts) {
    let giftRecords = {};
    let giftIndex = {};
    let result = 0;

    for (let i = 0; i < friends.length; i++) {
        giftRecords[friends[i]] = {};
        giftIndex[friends[i]] = 0;

        for (let j = 0; j < friends.length; j++) {
            if (i !== j) {
                giftRecords[friends[i]][friends[j]] = 0;
            }
        }
    }
    
    gifts.forEach(gift => {
        const [giver, taker] = gift.split(' ');
        
        giftRecords[giver][taker] += 1;
        
        giftIndex[giver]++;
        giftIndex[taker]--;
    })
    
    console.log(giftRecords)
    console.log(giftIndex)
    
    friends.forEach(giver => {
        let cnt = 0;
        let giverIndex = giftIndex[giver];
        
        for (let taker in giftRecords[giver]) {
            // 선물 준 개수가 받은 개수보다 많으면
            if (giftRecords[giver][taker] > giftRecords[taker][giver]) {
                cnt++;
                continue;          
            }
           
            if (giftRecords[giver][taker] === giftRecords[taker][giver]) {
                // 선물지수가 높으면
                if (giverIndex > giftIndex[taker]) {
                    cnt++;
                }
            }
        }
                                
        if (result <= cnt) {
            result = cnt;
        }
    });
    
    return result;
}