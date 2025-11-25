function pattern(n) {
  if (n <= 0) return "";

  let result = [];

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += ((i + j - 1) % n) + 1;
    }
    result.push(row);
  }

  return result.join("\n");
}