function reverseWords(str) {
 return str.split(" ")
 .map(word => 
      word.split("")
      .reverse()
      .join(""))
 .join(" ");
}

let reverseWords = (str)=>{
return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
console.log(reverseWords("Uwineza Florence"))