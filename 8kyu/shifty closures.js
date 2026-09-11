function greetPerson(personName){
    return () => 'Hello, ' + personName + '!';
}
var name = 'Abe'

const greetAbe = greetPerson(name);

name = 'Ben';

const greetBen = greetPerson(name);