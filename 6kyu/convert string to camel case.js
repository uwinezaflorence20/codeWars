function toCamelCase(str){
    let removed = str.replace(/[_ -]/g, " ");
  
    let result= '';
   for(let i=0 ; i< removed.length ; i++){
       if(removed[i-1] === " "){
           result += removed[i].toUpperCase();
       }
       else{
           result += removed[i];
       }
   }
   return result.replace(/[" "]/g,"");
}