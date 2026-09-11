function firstNonRepeated(s) {
  for(let char of s){
    if(s.indexOf(char) === s.lastIndexOf(char)){
      return char;
    }
  }
  return null;
}
