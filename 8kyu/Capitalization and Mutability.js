function capitalizeWord(word) {
  let array = word.split('');
  
  let firstElement = array[0].toUpperCase();
  
let removeFirstElement = array.shift();
let convertToString = array.join('');

return firstElement + convertToString;
// return word[0].toUpperCase() + word.slice(1);
}
