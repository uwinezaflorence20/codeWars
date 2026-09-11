const nums = [1, 2, 3];
const promises = nums.map(n =>
  Promise.resolve(n * 2)
);
const results = await Promise.all(promises);
console.log(results); // [2, 4, 6]



const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3"
];

async function getUsers() {
  const promises = urls.map(async url => {
    const res = await fetch(url);
    return res.json();
  });

  const users = await Promise.all(promises);
  console.log(users);
}
getUsers();



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  const nums = [1, 2, 3];

  const promises = nums.map(async n => {
    await delay(4000);
    return n * 10;
  });

  const result = await Promise.all(promises);
  console.log(result);
}

run();

//exercise 1
const arr = [1, 2, 3, 4];
let pro = arr.map(n=>Promise.resolve(n));
let  wholePromise = await Promise.all(pro);
console.log(wholePromise);
// exercises 2

const names = ["joy", "david", "flora"];
let whole = names.map(n=>Promise.resolve(n.toUpperCase()));
let answer = await Promise.all(whole);
console.log(answer);

//exercises 3
const users = ["alice", "bob", "florence"];
async function getAge(name) {
  return new Promise(resolve => {
    setTimeout(() => resolve(name.length * 5), 500);
  });
}
