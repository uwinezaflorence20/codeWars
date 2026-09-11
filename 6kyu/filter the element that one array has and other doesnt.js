function arrayDiff(a, b) {
  return a.filter((element) => !b.includes(element));
}
console.log(arrayDiff([1,2,3,4],[1,2,3]));

// the one that we have 
function arraySimilarity(a,b){
    return a.filter((element) => b.includes(element))
}
console.log(arraySimilarity([1,2,3,4],[1,2,3]));