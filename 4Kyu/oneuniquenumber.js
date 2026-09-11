function arrays(p) {
  const n = p ** 2 + p + 1;
  const result = [];
  for (let i = 0; i < p; i++) {
    const line = [1];
    for (let j = 0; j < p; j++) {
      line.push(2 + i * p + j);
    }
    result.push(line);
  }
  for (let a = 0; a < p; a++) {
    for (let b = 0; b < p; b++) {
      const line = [];
      for (let k = 0; k < p; k++) {
        line.push(2 + k * p + ((a * k + b) % p));
      }
      line.push(2 + p * p + a); 
      result.push(line);
    }
  }
  const lastLine = [1];
  for (let i = 0; i < p; i++) {
    lastLine.push(2 + p * p + i);
  }
  result.push(lastLine);

  return result;
}