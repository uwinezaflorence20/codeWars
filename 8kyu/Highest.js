function twoHighest(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr[0]];
  let first = Math.max(...arr);
  let remaining = arr.filter(num => num !== first);
  if (remaining.length === 0) return [first]; 
  let second = Math.max(...remaining);
  return [first, second];
}