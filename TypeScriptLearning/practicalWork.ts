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




