//question1
function multiply(a,b){
    if(a !== null && b !== null){
        return a*b;
    }
    else if ((a||b) === null){
        return a*a ;
    }
    else{
        return a.map(x=> x *x);
    }

}
console.log(multiply(3,5));

// second question

function capitalizedOdd(a) {
    let arr = a.split("");
    let result = arr.map((char, index) => {
        return index % 2 === 1 ? char.toUpperCase() : char;
    });
    return result.join("");
}

console.log(capitalizedOdd("uwineza")); 
console.log(capitalizedOdd("javascript"));



  