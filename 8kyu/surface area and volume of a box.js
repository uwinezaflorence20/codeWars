function getSize(width, height, depth){
  let theArea =2*((depth*width)+(depth*height)+(width*height))
  let theVolume = width*height*depth
  return [theArea,theVolume];
}