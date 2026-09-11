function add(x, y)
{
  const firstArr = new Array(x).fill(true);
  const secondArr = new Array(y).fill(true);
  return firstArr.concat(secondArr).length
}