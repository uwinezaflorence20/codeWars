function sortArray(arr) {
  const odds = arr.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
  console.log(odds);
  let oddIndex = 0;
  return arr.map(n => {
    if (n % 2 !== 0) {
      return odds[oddIndex++];
    }
    return n; 
  });
}