// Run by Node.js
const readline = require('readline');

function solution(answer, user) {
	let cnt = 1;
	
	while (!isFinished(answer, user)) {
		let status = getStatus(answer, user);
		
		for (let i = 0; i < 4; i++) {
			if (status[i] === 's') {
				continue;
			}
			
			if (status[i] === 'f') {
				user = updateNumber(user[i], user, i)
			}
		}
		
		if (status.includes('b')) {
			user = moveNumber(status, user);
		}
		
		cnt++;
	}
	
	console.log(cnt);
}

function isFinished(answer, user) {
	for (let i = 0; i < 4; i++) {
		if (answer[i] !== user[i]) {
			return false;
		}
	}
	
	return true;
}

function getStatus(answer, user) {
	let status = '';
	
	for (let i = 0; i < 4; i++) {
		if (answer[i] === user[i]) {
			status += 's';
		} else if (answer.includes(user[i])) {
			status += 'b';
		} else {
			status += 'f';
		}
	}
	
	return status;
}

function moveNumber(status, user) {
	let movedUser = [];
	
	for (let i = 0; i < 4; i++) {
		if (status[i] !== 's') {
			movedUser.push(user[i]);
		}
	}
	
	movedUser.unshift(movedUser.pop());
	
	for (let i = 0, j = 0; i < 4; i++) {
		if (status[i] !== 's') {
			user[i] = movedUser[j++];
		}
	}
	
	return user;
}

function updateNumber(num, user, idx) {
	let next = (num + 1) % 10;
	
	while (user.includes(next)) {
		next = (next + 1) % 10;
	}
	
	user[idx] = next;
	
	return user;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let inputs = [];
	
	for await (const line of rl) {
		inputs.push(line.split('').map(Number));
		
		if (inputs.length === 2) {
			rl.close();
		}
	}
	
	let answer = inputs[0];
	let user = inputs[1];
	
	solution(answer, user);
	process.exit();
})();

// 요구 사항 분석
// 1. 핵심 기능: Strike, Ball, Fail 판별하는 기능 => Strike 4개면 게임 승리, 종료
// Strike, Ball, Fail 각 상태일 때 진행 규칙
// 2-1. 현재 자리값이 Strike 경우 아무것도 하지 않음.
// 2-2. 현재 자리값이 Fail인 경우: 현재 자리값 = (현재 자리값 + 1) % 10
// 2-3. 만약 계산한 값이 다른 자리에 존재한다면, 존재하지 않을 때까지 반복 -> 동일 숫자 제거
// 3-1. 현재 자리값이 Ball이라면, Strike에 해당하는 자리를 제외한 나머지 자리를 모두 오른쪽으로 한 칸씩 이동 (Strike가 없는 경우 있음)
// 3-2. 오른쪽으로 옮길 자리가 없는 경우, Strkie가 아닌 가장 왼쪽 자리로 이동
// 게임에 승리하기까지 위 과정을 몇 번 수행하는지 구하기

// 구현 기능 목록
// 1. 초기입력과 정답 문자열을 배열로 변환하고, 각 자리값이 Strike/Ball/Fail인지 판별하는 기능 구현
// 2. 현재 자리값이 Fail일 때 규칙대로 계산한 값이 초기입력 배열에 존재하지 않을 때까지 반복해서 갱신하는 기능 구현 = 동일 숫자 제거
// 3. 현재 자리값이 Ball일 때 자리 이동하는 기능 구현