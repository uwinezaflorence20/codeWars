function isValidWalk(walk) {
  if(walk.length !==10) return false;
  let y=0;
  let x =0;
  for(let dir of walk){
    if (dir === 'n') y += 1;
    else if (dir === 's') y -= 1;
    else if (dir === 'e') x += 1;
    else if (dir === 'w') x -= 1;  
  }
  return y ===0 && x===0;
}