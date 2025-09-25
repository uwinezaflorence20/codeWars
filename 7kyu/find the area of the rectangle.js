function area(d,l){
  if (d <= l) return "Not a rectangle";
  let otherSide = Math.sqrt(d ** 2 - l ** 2);
  let area = l * otherSide;
  return Math.round(area * 100) / 100;
}