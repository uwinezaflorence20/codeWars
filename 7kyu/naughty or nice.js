function whatListAmIOn(actions){
  const naughtyLetters = ['b','f','k'];
  const niceLetters = ['g','s','n'];
  let naughtyCount =0;
  let niceCount =0;
  for(let action of actions){
     const firstLetter = action.trim().toLowerCase()[0]; 
    if(naughtyLetters.includes(firstLetter)){
      naughtyCount++;
    }
    else if(niceLetters.includes(firstLetter)){
      niceCount++;
  
    }
  }
  return naughtyCount >= niceCount ? 'naughty':'nice';
}
