function datingRange(age){
  let min = 0, 
      max = 0
  if (age <= 14) {
    min = Math.floor(age - 0.10 * age)
    max = Math.floor(age + 0.10 * age)
  } else {
    min = Math.floor(age / 2 + 7)
    max = Math.floor((age - 7) * 2)
  }
  return `${min}-${max}`
}
console.log(datingRange(20));
console.log(datingRange(12));
console.log(datingRange(40));

function padIt(str,n){
  //coding here
//   var cha ="";
//   var sig="*";
//   var i =0
  
//   while(i<=n){
//     if(i%2===0){
//       cha = cha + sig;
//     }
//     else{
//       cha = sig+str;
//     }
//     i++; 
//   }
//   return cha;
  
  var pad = "*";
  var left = Math.ceil(n/2), right = n-left;
  return pad.repeat(left) + str+ pad.repeat(right);
  
}
console.log(padIt("a",10));