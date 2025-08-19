function semicolonSeparationToCommaSeparation(input) {
  return input.replaceAll(';','').split("").join(' ');  
}
console.log(semicolonSeparationToCommaSeparation("1;2;3"))