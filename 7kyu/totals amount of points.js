function points(games) {
  let total = 0;

  for (let i = 0; i < games.length; i++) {
    const [x, y] = games[i].split(':').map(Number);

    if (x > y) {
      total += 3;
    } else if (x === y) {
      total += 1;
    }
 
  }

  return total;
}