function automorphic(n) {
  let squareRoot = Math.pow(n, 2);
  let string = squareRoot.toString();
  let stringn = n.toString();
   return string.endsWith(stringn) ? "Automorphic" : "Not!!";
}