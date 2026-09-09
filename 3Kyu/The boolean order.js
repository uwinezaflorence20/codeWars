function solve(s, ops) {
  const n = s.length;
  const trueCount = Array.from({length: n}, () => new Array(n).fill(0));
  const falseCount = Array.from({length: n}, () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    if (s[i] === 't') trueCount[i][i] = 1;
    else falseCount[i][i] = 1;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      let t = 0, f = 0;
      for (let k = i; k < j; k++) {
        const op = ops[k];
        const lt = trueCount[i][k], lf = falseCount[i][k];
        const rt = trueCount[k + 1][j], rf = falseCount[k + 1][j];
        const total = (lt + lf) * (rt + rf);

        let tCombos;
        if (op === '&') tCombos = lt * rt;
        else if (op === '|') tCombos = total - lf * rf;
        else tCombos = lt * rf + lf * rt; // ^

        t += tCombos;
        f += total - tCombos;
      }
      trueCount[i][j] = t;
      falseCount[i][j] = f;
    }
  }

  return trueCount[0][n - 1];
}