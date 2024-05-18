let combi;
let dc;
let totalPrice;
let emojis;
let people;
let result = [];

function solution(users, emoticons) {
    emojis = emoticons;
    people = users;
    
    users.sort((a, b) => a[0] - b[0]);
    getDiscountLimit(users[0][0]);
    combi = Array(emojis.length);

    getCombinations(0);
    
    result.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0];
        }

         return b[1] - a[1];
    });
    
    return result[0];
}

function getDiscountLimit(minRate) {
    if (minRate <= 10) {
        dc = [0.4, 0.3, 0.2, 0.1]
    } else if (minRate <= 20) {
        dc = [0.4, 0.3, 0.2]
    } else if (minRate <= 30) {
        dc = [0.4, 0.3]
    } else {
        dc = [0.4]
    }
}

function getCombinations(depth) {
    if (depth === emojis.length) {
        getResult();
        return;
    }
    
    for (let i = 0; i < dc.length; i++) {
        combi[depth] = dc[i];
        getCombinations(depth + 1)
    }
}

function getResult() {
    let plus = 0;
    let totals = 0;
    
    for (let [rate, budget] of people) {
        let total = 0;
        for (let i = 0; i < emojis.length; i++) {
            if (combi[i] * 100 >= rate) {
                total += emojis[i] * (1 - combi[i]);
            }
        }
        
        if (total >= budget) {
            plus++
            continue;
        }
        
        totals += total;
    } 
    
    result.push([plus, totals])
}