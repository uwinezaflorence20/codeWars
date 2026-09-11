function hello(name) {

  if(name === undefined  || name === ""){
    return `Hello, World!`
  }
      
else{
  let names=name.charAt(0).toUpperCase();
  return `Hello, ${names}${name.slice(1).toLowerCase()}!`;
}
}