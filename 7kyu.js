function add(num1){
  return function(num2){
    return num1+num2;
  }
}

function reverse(n) {
  let reversed = 0;
  let num = Math.abs(n);

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return n < 0 ? -reversed : reversed;
}
