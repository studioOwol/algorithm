function solution(phone_number) {
    const lastNumbers = phone_number.slice(-4)
    const hiddenNumbers = '*'.repeat(phone_number.length - 4)
    
    return hiddenNumbers + lastNumbers
}