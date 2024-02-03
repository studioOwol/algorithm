function solution(prices) {
    const stack = [];
    const result = Array(prices.length).fill(0);

    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
            const top = stack.pop();
            result[top] = i - top;
        }
        
        stack.push(i);
    }

    while (stack.length) {
        const top = stack.pop();
        result[top] = prices.length - 1 - top;
    }

    return result;
}