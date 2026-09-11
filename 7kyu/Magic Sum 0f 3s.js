function magicSum(numbers) {
    let result =[];
    let even=numbers.filter((n)=>n%2!==0);
    for(let element of even){
        if(element.toString().includes("3")){
            result.push(element);
        }
    }
return result.reduce((a,b)=>a+b,0);
}