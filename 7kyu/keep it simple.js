function isKiss(words) {
    let wordes = words.split(" ");
    
    for(let word of wordes) {
        if(word.length >= wordes.length) {
            return 'Keep It Simple Stupid';
        }
    }
    
    return 'Good work Joe!';
}
console.log(isKiss('Joe had a bad day'));
console.log(isKiss('Joe is having no fun'));