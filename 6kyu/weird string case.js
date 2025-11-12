function toWeirdCase(string){
  return string
    .split('')
    .map((word,i) => i%2 === 0 ? word.toUpperCase() : word.toLowerCase())
    .join('');
}
console.log(toWeirdCase("string"));

