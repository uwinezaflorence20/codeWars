function power(base, exponent) {
  if (exponent === 0) return 1; 
  let result = 1;
  let positiveExponent = Math.abs(exponent);
  for (let i = 0; i < positiveExponent; i++) {
    result *= base;
  }
  return exponent > 0 ? result : 1 / result;
}

//refactor

const power = (x, y) => x ** y;