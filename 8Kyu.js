function digitize(n) {
return n.toString().split('').reverse().map(Number);
}

function litres(time) {
  
  
  return Math.floor(time * 0.5);
}

function squareSum(numbers){

  return numbers.map(x => x*x).reduce((a, b) => a + b, 0)
}

function duckDuckGoose(players, goose) {
  const index = (goose - 1) % players.length;
  return players[index].name;
}

function isVow(a){
  return a.map(code => {
    const char = String.fromCharCode(code);
    return 'aeiou'.includes(char) ? char : code;
  });
}

var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

function twoSort(s) {
 const first = s.slice().sort()[0];       // sort a copy, get first string
  return first.split('').join('***');
}