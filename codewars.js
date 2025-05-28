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