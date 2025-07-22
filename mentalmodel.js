//question1function multiply(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  } else if (typeof a === 'number' && b === undefined) {
    return a * a;
  } else if (Array.isArray(a)) {
    return a.map(x => x * x);
  } else {
    return "Invalid input";
  }


console.log(multiply(3)); // Output: 9


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


// question with chatgpt and revision
  