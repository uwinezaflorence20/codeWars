function leastLarger(arr, index) {
  const target = arr[index]; 
  let minLarger = Infinity;
  let minIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] > target && arr[i] < minLarger) {
      minLarger = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
}