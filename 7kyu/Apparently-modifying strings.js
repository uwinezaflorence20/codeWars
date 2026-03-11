function apparently(string) {
 const array = string.split(" ")
 for(let i=0 ;i<=array.length;i++){
     if((array[i] === "and" || array[i] === "but") && array[i+1] !== "apparently"){
         array.splice(i+1,0,"apparently");
         i++;
     }
 }
 return array.join(" ");
}