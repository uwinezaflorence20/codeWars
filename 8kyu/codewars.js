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



//code wars monday 17/06/2025
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

function pickIt(arr){
  var odd=[],even=[];
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2){
      odd.push(arr[i]);
    }else{
      even.push(arr[i]);
    }
  }
  return [odd,even];
}

// def grabDoll(dolls):
//     bag = []
//     for doll in dolls:
//         if doll == "Hello Kitty" or doll == "Barbie doll":
//             bag.append(doll)
//             if len(bag) == 3:
//                 break
//         else:
//             continue
//     return bag



function combat(health, damage) {
  // Write your code here
  var new_health;
  
  if (health < 0){
    return "Health cannot go below 0";
  }
  else 
    return new_health = health - damage;
}
console.log(combat(-20,10));

function removeChar(str){
 //You got this!
  
  if (str.length === 2){
    return ""
  }
  else{
    return str.substring(1,str.length - 1)
  }

};

function integrate(coefficient, exponent) {
  if(coefficient>=0 && exponent>=0){
    return " coefficient and exponent should be positive"
  }
  else 
    return coefficient * ((("x")^(coefficient+exponent))/(coefficient+exponent));
  
}


function integrate(coefficient, exponent) {
  if(coefficient<=0 && exponent<=0){
    return " coefficient and exponent should be positive"
  }
  else {
    let newexponent = exponent +1;
    let newcoefficient = coefficient / newexponent;
    return newcoefficient + "x"+"^"+ newexponent;
  }
  
}



function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  }
  
  let sum =0;
  let count =0;
  for(let i = 0 ; i < input.length ; i++){
    if(input[i] >0){
    count++;
    }
    else{
       sum = sum + input[i];
    }
  }
  return [count , sum];
}