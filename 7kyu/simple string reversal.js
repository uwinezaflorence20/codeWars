function solve(str){
    let result = "";
    let theLetterTogether = str.replace(/ /g,"").split("").reverse();
for(let i=0 ;i< str.length;i++){
    if(str[i]=== " "){
       result += " ";
    }
    else {
        result += theLetterTogether.shift();
    }
}
return result;
}