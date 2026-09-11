Promise.resolve("Start")
  .then(val => {
    console.log(val);
    // throw "Error in chain!";
  })
  .then(val =>{
     console.log("This won't run")
    })
  .catch(err => console.log(err));
  // what will be the output