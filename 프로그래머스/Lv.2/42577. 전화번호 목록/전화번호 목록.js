function solution(phone_book) {
    return !phone_book.sort().some((num, idx)=> {
        if(idx === phone_book.length - 1) return false;

        return phone_book[idx + 1].startsWith(phone_book[idx]);        
    })
}