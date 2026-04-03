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
    }
  } else {
