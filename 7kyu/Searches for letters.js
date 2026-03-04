function change(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerInput = string.toLowerCase();
  let result = "";
  for (let letter of alphabet) {
    if (lowerInput.includes(letter)) {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}