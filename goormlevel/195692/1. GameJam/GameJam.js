const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// 요구 사항 분석
// 보드게임에서 goorm과 player 중 누가 더 높은 점수를 획득했는지 구하기, 비기는 케이스 없음
// 플레이어와 구름이는 별개의 게임
// 3 <= N <= 200, 보드 전체 탐색 N * N = 10^4
// 진행 방법 및 규칙
// 1. 보드의 각 칸에는 지시 사항, command 방향으로 count만큼 '한 칸' 이동
// 2-1. 이동 중 보드 밖으로 나가게 되면 반대쪽의 첫 번째 칸으로 이동 (같은 행 첫 번째 열)
// 2-2. 맨 아래 칸에서 아래쪽 이동이면 해당 열의 맨 위쪽 칸으로 이동 (첫 번째 행, 같은 열)
// 2-3. 이동 거리가 남아 있다면 계속 이동
// 3. 자신의 말이 한 번이라도 방문한 칸을 다시 지나는 경우 게임 종료, 그 외 경우 4번 단계 반복
// 4. 게임 점수는 시작 칸 포함, 게임이 종료되기 전까지 말이 방문한 서로 다른 칸의 개수

// 구현 기능 목록
// 1. 구름과 플레이어의 각 visited 배열 생성
// 2. 처음 좌표에서 지시사항 count만큼 이동하는 기능 dfs
// 3. 다음 좌표로 이동 가능할 때 점수 + 1

let ds = { U: [-1, 0], D: [1, 0], R: [0, 1], L: [0, -1]};
let board;
let N;

function solution(n, user, player, map) {
	N = n;
	let uVisited = Array.from({length: N}, () => Array(N).fill(false));
	let pVisited = Array.from({length: N}, () => Array(N).fill(false));
	board = map;
	
	let uScore = getScore(user[0] - 1, user[1] - 1, uVisited);
	let pScore = getScore(player[0] - 1, player[1] - 1, pVisited);
	
	if (uScore > pScore) {
		console.log(`goorm ${uScore}`);
	} else {
		console.log(`player ${pScore}`);
	}
}

function getScore(r, c, visited) {
	let score = 1;
	
	while (true) {
		visited[r][c] = true;
	
		let len = board[r][c].length - 1;
		// 
		let cnt = Number(board[r][c].slice(0, len));
		let command = board[r][c].slice(len);
	
		for (let i = 0; i < cnt; i++) {
			let nr = r + ds[command][0];
			let nc = c + ds[command][1];
			
			if (nr === N) {
				nr = 0;
			}
			if (nr < 0) {
				nr = N - 1;
			}
			if (nc < 0) {
				nc = N - 1;
			}
			if (nc === N) {
				nc = 0;
			}
			
			if (!visited[nr][nc]) {
				[r, c] = [nr, nc];
				visited[nr][nc] = true;
				score++;
			} else {
				return score;
			}
		}
	}
}

let T = null;
let user = null;
let player = null;
let input = [];
let cnt = 0;

rl.on('line', (line) => {
	if (!T) {
		T = +line;
		cnt++;
	} else if (!user) {
		user = line.split(' ').map(Number);
		cnt++;
	} else if (!player) {
		player = line.split(' ').map(Number);
		cnt++;
	} else {
		input.push([...line.split(' ')]);
		cnt++;
	}
	
	if (cnt === 3 + T){
		rl.close();
	}
}).on('close', () => {
	
	solution(T, user, player, input);
	
	process.exit();
})