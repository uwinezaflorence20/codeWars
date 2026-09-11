// Create your numbers function here
function numbers(...args){
  return args.every(arg => typeof arg === 'number');
}