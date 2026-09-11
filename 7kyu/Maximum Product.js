function adjacentElementsProduct(array) {
let maxProduct = -Infinity;
  for(let i =0;i<array.length-1;i++){
    let product = array[i] * array[i+1];
    maxProduct = Math.max(maxProduct,product);
  }
return maxProduct;
}