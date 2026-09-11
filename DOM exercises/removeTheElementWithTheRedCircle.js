   //<div id="green"/>
//<div id="red"/>
//<button type="button" id="button">Click Me</button>


const button = document.querySelector('#button');
const removeRedCircle = () => {
const button = document.querySelector('#button');


const removeRedCircle = () => {
   const redDiv = document.getElementById('red');
    if (redDiv) {
      redDiv.remove();
    }
};
button.addEventListener('click', removeRedCircle);
};
