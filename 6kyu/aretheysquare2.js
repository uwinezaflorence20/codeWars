var isSquare = function(arr) {
  if (!arr.length) return undefined;
  function check(el) {
    if (Array.isArray(el)) return el.every(check); 
    return Number.isInteger(Math.sqrt(el));
  }
  return arr.every(check);
};