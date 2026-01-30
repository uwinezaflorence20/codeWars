// Level1
//Q1
function formatInput(a:string|number):string|number{
    if(typeof a ==="string"){
        return a.toUpperCase();
    }
  return a*2;
}
console.log(formatInput("uwineza"));
//Q2
function setTheme(theme:"light"|"dark"|"system"){
    return `Theme set to ${theme}`;
}
console.log(setTheme("light"));
//level2 
//Q3 interfaces

interface Users {
  id: number;
  name: string;
  email?: string; 
  role: "admin" | "user";
}
let florence:Users ={
    id:1,
    name:"Florence",
    email:"uwinezaflorence20@gmail.com",
    role:"admin"

}

function printUser(user:Users):string{
return `Name:${user.name}(${user.role})`
}
console.log(printUser(florence))

//Q4 readonly
interface Product {
    readonly id:number
    name:string
    price:number
    discount?:number
}

const florence2:Product ={
 id:1,
 name:"Uwineza",
 price:1000
}
// console.log(florence2.id=2); it can not be 
// changed because it is declared as the readonly
//utility type
//Q5
interface Profile {
  username: string;
  bio: string;
  age: number;
}
let myProfile:Profile={
    username:"UWINEZA",
    bio:"DON'T GOT ANYTHING TO SAY",
    age:30
}
function beforeTheUpdate(users:Profile){
return `before the update ${users.username} and the age is ${users.age}`
}
function updateProfile(users:Partial<Profile>){
 users.username ="uwineza";
 users.age=20;
 return `The age of Profile is ${users.username} and the age is ${users.age}`;
}
console.log(beforeTheUpdate(myProfile))
console.log(updateProfile(myProfile));

//Q6





