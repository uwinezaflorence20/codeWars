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


let evenChars = (string) =>{
  (string.length<2 || string.length > 100) ? 'Invalid string': "continue";

  var result =[];
  for(let str of string){
     if(i % 2 === 1){
         result.push(string[i]);   
      }
  }
 return result;
}



let sr = new Set({'he':"done"},)


let arr = [1,2,3,4,5,6,7,8,9];
console.log(...arr)
console.log(...arr)
