function solve(a,b){
  let theResult =[];
  for(let item of b){
    theResult.push(a.filter(ite => ite === item).length)
  }
  return theResult;
}