function decompose(n) {
  if (!n || n === "0") return [];
  
  let num, den;
  if (typeof n === "string") {
    if (n.includes("/")) {
      [num, den] = n.split("/").map(BigInt);
    } else if (n.includes(".")) {
      const decimals = n.split(".")[1].length;
      den = BigInt(10 ** decimals);
      num = BigInt(n.replace(".", ""));
      } else {
      num = BigInt(n);
      den = 1n;
      }} else {
    const str = n.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1].length;
      den = BigInt(10 ** decimals);
      num = BigInt(str.replace(".", ""));
    } else {
      num = BigInt(n);
      den = 1n;
    }
  }
   const gcd = (a, b) => b === 0n ? a : gcd(b, a % b);
  const reduce = (n, d) => {
    const g = gcd(n < 0n ? -n : n, d < 0n ? -d : d);
    return [n / g, d / g];
  };
  
  [num, den] = reduce(num, den);
  
  if (num === 0n) return [];
  
  const result = [];
  
  while (num > 0n) {
    if (den === 1n) {
      result.push(`${num}`);
      break;
    }
    
    if (num === 1n) {
      result.push(`1/${den}`);
      break;
    }
    
    if (den % num === 0n) {
      const newDen = den / num;
      result.push(newDen === 1n ? `${num}` : `1/${newDen}`);
      break;
    }
    
    const ceilDen = (den + num - 1n) / num;
    result.push(`1/${ceilDen}`);
    
    const newNum = num * ceilDen - den;
    const newDen = den * ceilDen;
    
    [num, den] = reduce(newNum, newDen);
  }
  
  return result;
}
