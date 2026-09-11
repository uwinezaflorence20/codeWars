function strCount(str, letter){ 
    let count =0;
  for( let lett of str ){
     if (lett.toLowerCase() === letter.toLowerCase()){
          count++;
      }
  }
   return count;
}