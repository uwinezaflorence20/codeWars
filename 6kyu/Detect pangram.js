function isPangram(string){
  let replace = string.toLowerCase().replace(/[^a-z]/g ,"");

  let removeDuplicate = new Set(replace);
    return removeDuplicate.size === 26; 
}