function mergeArrays(a, b) {
  const merged = a.concat(b);
  const unique = [...new Set(merged)];
  return unique.sort((x, y) => x - y);
}