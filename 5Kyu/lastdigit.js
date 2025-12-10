function lastDigit(n, m) {  
    let n1=Number(n);
    let n2=Number(m)
    if(n1<0 || n2<0) return `not valid input`;
   return Number(Math.pow(n1,n2).toString().slice(-1));
}
console.log(lastDigit(4,1))
console.log(lastDigit(10,10000000000))


function lastDigit(n, m) {
  n = BigInt(n);
  m = BigInt(m);
  if (m === 0n) return 1n;
  const last = n % 10n;
  const pos = m % 4n || 4n;
  return (last ** pos) % 10n;
  }


  