function calculateTotal(team1, team2) {
  let t1s = (team1 || []).slice(0, 3).reduce((sum, s) => sum + s, 0);
  let t2s = (team2 || []).slice(0, 3).reduce((sum, s) => sum + s, 0);
  return t1s > t2s;
}