function findSubarray(arr) {
  if (arr.length <= 1) return [0,0];

  let sorted = [...arr].sort((a,b) => a-b);

  let start = -1;
  let end = -1;
}