function findSubarray(arr) {
  if (arr.length <= 1) return [0,0];

  let sorted = [...arr].sort((a,b) => a-b);

  let start = -1;
  let end = -1;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sorted[i]) {
    }
}
}