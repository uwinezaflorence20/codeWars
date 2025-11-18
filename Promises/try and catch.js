function cookRice() {
  return Promise.resolve("Rice");
}

async function makeMeal() {
  try {
    const result = await cookRice();
    console.log(result + " is ready!");
  } catch (error) {
    console.log(error);
  }
}

makeMeal();


//2.
function getJuice() {
  return Promise.reject("No juice available");
}

async function serveJuice() {
  try {
    const drink = await getJuice();
    console.log(drink);
  } catch (error) {
    console.log("Error: " + error);
  }
}

serveJuice();

//3
function makeCake() {
  return Promise.resolve("Chocolate Cake");
}

async function serveCake() {
  try {
    console.log(`${await makeCake()} is served!`);
  } catch (error) {
    console.log(error);
  }
}

serveCake();

//4
function buyItem(money) {
  if (money < 10) {
    return Promise.reject("Not enough money");
  }
  return Promise.resolve("Item bought");
}

async function purchase() {
  try {
    const result = await buyItem(5);
    console.log(result);
  } catch (error) {
    console.log("Purchase failed: " + error);
  }
}

purchase();
