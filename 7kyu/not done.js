function calculate(string) {
    let arr= string.split(' ')
    let result = 0
    for(let word of arr){
        if(word.includes("gains") && !isNaN(word)){
            result = result + Number(word)
        }
        else {
             result = result - Number(word)
        }
    }
    return result;
 
}
console.log(calculate("Panda has 48 apples and loses 4"))