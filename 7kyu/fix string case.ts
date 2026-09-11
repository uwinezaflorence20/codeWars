export function solve(s: string): string {
  let upper = 0;
  let lower = 0;
  for (let char of s) {
    if (char >= "A" && char <= "Z") upper++;
    else if (char >= "a" && char <= "z") lower++;
  }

  if (upper === lower) {
    return s.toLowerCase();
  } else if (lower > upper) {
    return s
      .split("")
      .map((c) => (c >= "A" && c <= "Z" ? c.toLowerCase() : c))
      .join("");
  } else {
    return s
      .split("")
      .map((c) => (c >= "a" && c <= "z" ? c.toUpperCase() : c))
      .join("");
  }
}