function alphabetWar(fight) {
  const power = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    m: -4,
    q: -3,
    d: -2,
    z: -1
  };

  let score = 0;

  for (let char of fight) {
    score += power[char] || 0;
  }

  if (score > 0) return "Left side wins!";
  if (score < 0) return "Right side wins!";
  return "Let's fight again!";
}
