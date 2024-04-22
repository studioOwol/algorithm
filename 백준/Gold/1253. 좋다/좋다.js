let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

//투포인터
function twoPointer(arr, num) {
  let start = 0; //배열의 시작 index
  let end = arr.length - 1; //배열의 끝 index

  //arr에서 서로다른 두 수를 더하는 것이니 두 수가 만나면안됨
  while (start < end) {
    let sum = arr[start] + arr[end]; //두 수의 합이
    if (sum === num) return 1; //num과 같다면 바로 return 1을 하여 정답 +1
    if (sum < num) start++;
    //num보다 작다면 수를 늘려줘야 하기 때문에 start++
    else end--; //아니면 수를 줄여줘야 하기 때문에 end--
  }
  return -1; //결국 num과 같지 않다면 return -1
}

let good = 0; //정답이 될 변수
//입력 배열들을 number화하여 오름차순 정렬
let numbers = input[1]
  .split(' ')
  .map((i) => parseInt(i))
  .sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
  //배열의 각 요소에 대해
  let num = numbers[i]; //한 요소씩 뽑아서
  let newNumbers = numbers.slice(0, i).concat(numbers.slice(i + 1)); //기존 배열 numbers에서 뽑은 요소(num)을 기준으로 앞 뒤 배열을 잘라서 붙이기 => num만 없는 새로운 배열이 완성됨
  if (twoPointer(newNumbers, num) === 1) good++;
  else continue;
}

console.log(good);
