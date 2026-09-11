function candles(candlesNumber, makeNew) {
 let totalBurned = candlesNumber;
  let leftOver = candlesNumber;
  while(leftOver >= makeNew){
    let newCandles = Math.floor(leftOver/makeNew);
    totalBurned += newCandles;
    leftOver = (leftOver%makeNew)+newCandles;
  }
  return totalBurned;
}