function makeLooper(str) {
  let arr = str.split('');

  return function() {
    let char = arr.shift();  
    arr.push(char);          
    return char;
  }
}
const loop = makeLooper("uwineza");