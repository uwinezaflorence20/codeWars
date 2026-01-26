function example(value: string | number){
if(typeof value === "string"){
return `The type of the ${value} is string`;
}
else{
return `The type of the ${value} is number`;
}
}
console.log(example("Uwineza"));