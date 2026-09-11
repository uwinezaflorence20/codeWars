function differenceInAges(ages){
  let maximumAge = Math.max(...ages)
  let minimumAge = Math.min(...ages)
  let difference = maximumAge -minimumAge;
  return [minimumAge,maximumAge,difference]
}
console.log(differenceInAges([82, 15, 6, 38, 35]))