function fraction(a, b) {
const gcd = (x,y)=>y === 0 ? x :gcd(y,x%y);
  let g = gcd(a,b);
  return (a/g)+ (b/g);
}