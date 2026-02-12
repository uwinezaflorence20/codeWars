function onlyOne(...flags) {
let count =0;
  for(let flag of flags ){
    if(flag === true) count++
    if(count >1) return false
  }
  return count ===1;
}