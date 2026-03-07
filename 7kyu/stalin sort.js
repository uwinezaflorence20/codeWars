function stalinSort(arr) {
  if (arr.length === 0) return;

  let lastSurvivor = arr[0];
  for (let i = 1; i < arr.length; ) {
    if (arr[i] >= lastSurvivor) {
      lastSurvivor = arr[i];
      i++;
    } else {
      arr.splice(i, 1); // remove the element
      // console.log("Расстрелять!");
    }
  }
}