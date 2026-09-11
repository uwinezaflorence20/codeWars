let applyFeedback = (battlescape, enemy, position)=>{
  let char = [...battlescape]
   if(char[position] === enemy)
    return DISPENSE_TREAT;
  else
    return RELEASE_NITROGEN_SHOWER;
}