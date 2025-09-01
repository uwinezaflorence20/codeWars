function diff(a, b){
  let setA = new Set(a);
  let setB = new Set(b);
  let diff = [...setA].filter(x => !setB.has(x))
  .concat([...setB].filter(x =>!setA.has(x)));
  
  return diff.sort();
  
}