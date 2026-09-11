function findUniq(arr) {
  function signature(str) {
    return [...new Set(str.toLowerCase())].sort().join('');
  }
  let sigs = arr.map(signature);
  for (let i = 0; i < sigs.length; i++) {
    if (sigs.indexOf(sigs[i]) === sigs.lastIndexOf(sigs[i])) {
      return arr[i];
    }
  }
}