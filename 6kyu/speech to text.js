const bot =(input)=> {
 const nums = input.match(/\d+/g).map(Number);
 console.log(nums);

};
console.log(bot("Add 5 to 20."))