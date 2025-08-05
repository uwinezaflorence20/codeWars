function evenChars(string) {
  if(string.length < 2 || string.length > 100){
      return "invalid string";
  }
  var result = [];
  for(let i = 1; i < string.length; i++){
      if(i % 2 === 1){
         result.push(string[i]);   
      }
  }
  return result;
}
