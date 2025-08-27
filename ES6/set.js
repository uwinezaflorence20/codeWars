const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games); // declaration of the set
// set automatically remoce the duplicate


const example_set = new Set([1,2,3,5,2,4,3,5,4,3,2,4,2,4,2,4,4]);
console.log(example_set.size)
example_set.add(10);// add item into set
example_set.add(11);
example_set.add(12);
example_set.delete(10);// deleting the item from the set
//example_set.clear()// delete everything from the set
console.log(example_set.size);// return the size of the set
console.log(example_set.delete(10)); // if successfull return true if not return false
console.log(example_set);

let checkhas_one = example_set.has(10);
let checkhas_two = example_set.has(12);
console.log(checkhas_one);
console.log(checkhas_two);
console.log(example_set.values());
console.log(example_set.keys())

for(let exa of example_set){
    console.log(exa);
}

const iterator = example_set.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


 const myFavoriteFlavors = new Set();
myFavoriteFlavors.add('chocolate chip');
myFavoriteFlavors.add('cookies and cream');
myFavoriteFlavors.add('strawberry');
myFavoriteFlavors.add('vanilla');
console.log(myFavoriteFlavors);
 
 console.log(myFavoriteFlavors.delete('strawberry'));

 let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);

 var uniqueFlavors = new WeakSet();
 var flavor1 = { flavor: 'chocolate' };
 var flavor2 = {flavor: 'vanilla'};
 uniqueFlavors.add(flavor1);
 uniqueFlavors.add(flavor2);
 uniqueFlavors.add(flavor1);
 console.log(uniqueFlavors.has(flavor1));

