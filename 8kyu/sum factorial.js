function sumFactorial(arr){
  let fun = (n) => {
    if(n===1 || n===0) {
        return 1;
    }
    else if (n<0){
        return "Invalid number"
    }
  
   let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
}
 return arr.reduce((sum, num) => sum + fun(num), 0);
};