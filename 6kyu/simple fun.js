function rounding(n, m) {
  const lower = Math.floor(n / m) * m; 
  const upper = Math.ceil(n / m) * m;  
  const mid = (lower + upper) / 2;

  if (n === mid) {
    return n; 
  }

  return (n - lower < upper - n) ? lower : upper; 
}