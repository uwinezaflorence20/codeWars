function alphabetPosition(text) {
  let result =[];
  for(let char of text.toLowerCase()){
    if(char >= 'a' && char <= 'z'){
      result.push(char.charCodeAt(0)-96)
    }
  }
  return result.join(" ");
}