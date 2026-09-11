const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: null },       
  { name: "Headphones", price: 150 },
  { name: undefined, price: 100 },           
  { name: "Monitor", price: undefined },     
  { name: null, price: 300 }                
]
function convertNullableValues(arrayOfObjects) {
  return arrayOfObjects.map(obj => {
    const result = {};
    for (let key in obj) {
      if (obj[key] === null) {
        result[key] = 0;        
      } else if (obj[key] === undefined) {
        result[key] = "";        
      } else {
        result[key] = obj[key];   
      }
    }
    return result;
  });
}
console.log(convertNullableValues(products));
