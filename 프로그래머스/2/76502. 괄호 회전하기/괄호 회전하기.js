
function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const arr = [];
    const temp = i === 0 ? s : s.slice(i) + s.slice(0, i);
    for (let j = 0; j < temp.length; j++) {
      if (arr[arr.length - 1] === '(' && temp[j] === ')') arr.pop();
      else if (arr[arr.length - 1] === '[' && temp[j] === ']') arr.pop();
      else if (arr[arr.length - 1] === '{' && temp[j] === '}') arr.pop();
      else arr.push(temp[j]);
    }
    if (arr.length === 0) answer++;
  }
  return answer;
}