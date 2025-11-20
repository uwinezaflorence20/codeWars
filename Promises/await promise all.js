async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
asyncPromAll();

//example using Promise.all() and await
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

serveDinnerAgain();

//fetch api
async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  //console.log(response);
  const data = await response.text();
  console.log(data);
}

getPost();

// async function getText(file) {
//   let x = await fetch(file);
//   let y = await x.text();
//   myDisplay(y);
// }


