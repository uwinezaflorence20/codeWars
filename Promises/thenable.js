const thenable = {
  then: (resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
  }
};
Promise.resolve()
  .then(() => thenable)
  .then(value => {
    console.log(value); // "Done!" after 1s
  });
