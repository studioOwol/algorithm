const [[n, m], ...edges] = (require("fs").readFileSync("/dev/stdin") + "").trim().split("\n").map((v) => v.split(" ").map(Number));

function bellmanFord() {
  const minEta = Array(n + 1).fill(Infinity);
  minEta[1] = 0;
  for (let i = 0; i < n; i++) {
    for (const e of edges) {
      if (minEta[e[1]] <= minEta[e[0]] + e[2]) continue;
      if (i === n - 1) return [-1];
      minEta[e[1]] = minEta[e[0]] + e[2];
    }
  }
  return minEta.slice(2).map((v) => (v === Infinity ? -1 : v));
}
console.log(bellmanFord().join("\n"));
