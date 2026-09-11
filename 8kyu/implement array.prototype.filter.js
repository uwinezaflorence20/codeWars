Array.prototype.filter = function (func) {
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun :)
  const result = [];
for (let i = 0; i < this.length; i++) {
    if (i in this) { // Handle sparse arrays
      if (func(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
}