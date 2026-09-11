var word ="uwineza"
console.log(word.split(""));
var arr=[1,2,3,4,5]
console.log(arr.join());


let answer = arr.map(a => a*2);
console.log(answer);

let answer2 = arr.filter(x => x<4);
console.log(answer2);


let red = arr.reduce((a,b) => a+b,0);
console.log(red);
//event listeners
const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function () {
  console.log('The heading was clicked!');
});

const startingTime = performance.now();
for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

const sT = performance.now();
const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>
for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); 
const eT= performance.now();
console.log('This code took ' + (eT - sT) + ' milliseconds.');

