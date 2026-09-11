function arrayInfo(arr) {
  if (arr.length === 0) return 'Nothing in the array!';

  let countInt = null;
  let countFloat = null;
  let countStr = null;
  let countSpace = null;

  for (let item of arr) {
    if (typeof item === "number" && !isNaN(item)) {
      if (Number.isInteger(item)) {
        countInt = (countInt || 0) + 1;
      } else {
        countFloat = (countFloat || 0) + 1;
      }
    } else if (typeof item === "string") {
      if (item.trim() === "") {
        countSpace = (countSpace || 0) + 1;
      } else {
        countStr = (countStr || 0) + 1;
      }
    }
  }

  return [
    [arr.length],
    [countInt],
    [countFloat],
    [countStr],
    [countSpace]
  ];
}