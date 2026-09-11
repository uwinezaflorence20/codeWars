export function findNeedle(haystack: any[]):string {
  let theIndex = haystack.indexOf("needle")
  return `found the needle at position ${theIndex}`;
}