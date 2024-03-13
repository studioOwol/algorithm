let [t, ...city] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [N, M] = t;
let houses = [];
let restaurants = [];
let minChickenDist = Infinity;

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (city[r][c] === 1) {
      houses.push([r, c]);
    }

    if (city[r][c] === 2) {
      restaurants.push([r, c]);
    }
  }
}

const dfs = (idx, selected) => {
  if (selected.length === M) {
    let chickenDist = 0;

    for (let [r, c] of houses) {
      let minDist = Infinity;

      for (let [r2, c2] of selected) {
        let dist = Math.abs(r - r2) + Math.abs(c - c2);
        minDist = Math.min(minDist, dist);
      }
      chickenDist += minDist;
    }

    minChickenDist = Math.min(minChickenDist, chickenDist);
    return;
  }

  for (let i = idx; i < restaurants.length; i++) {
    dfs(i + 1, [...selected, restaurants[i]]);
  }
};

dfs(0, []);

console.log(minChickenDist);
