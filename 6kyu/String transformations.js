let stringTransformation =(string,transformations)=>{
   for(trans of transformations){
     if(trans === "U"){
       string = string.toUpperCase();
     }
     else if(trans === "L"){
       string = string.toLowerCase();
     }
    else if(trans === "R"){
      string = string.split("").reverse().join("");
   }
     else if(trans === "D"){
       let result = [];
         for (let char of string) {
                result.push(char ,char);
            }
            string = result.join("");
        }
     }
  return string;
 }