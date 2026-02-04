export function getRealFloor(n: number): number {
  if (n <= 0) {
    return n;
  }

  if (n < 13) {
    return n - 1;
  }

  return n - 2;
}