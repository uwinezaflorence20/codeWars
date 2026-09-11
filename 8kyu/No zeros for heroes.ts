export function noBoringZeros(n: number): number {
 while (n % 10 === 0 && n !== 0) {
    n = n / 10;
  }
  return n;
}