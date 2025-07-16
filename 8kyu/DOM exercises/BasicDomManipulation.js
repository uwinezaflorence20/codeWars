//<p id="message">Hello!</p>
//<button id="clickMeBtn">Click Me</button>
//Q1.
const button = document.getElementById('clickMeBtn');
if(button){
    button.addEventListener('click', function(){
        const message = document.getElementById('message');
       message.textContent("Button clicked!");
    });
}

//Q2.There is a paragraph with ID secret. When the button with ID toggleBtn is clicked, toggle the visibility of the paragraph.

//If it’s visible, hide it.If it’s hidden, show it.

const  par = document.getElementById('secret');
const but = document.getElementById('toggleBtn');
if(but){
    but.addEventListener('click', function(){
        if(par.style.display === 'none'){
            par.style.display = 'block';
        }
        else{
            par.style.display = 'none';  
        }
    });
}

// Q3.

const unord = document.getElementById('itemList');
const butt = document.getElementById('addItemBtn');

if(butt){
    butt.addEventListener('click', function(){
        const list = document.createElement('li');
        let counter ;
        for(counter =0 ; i<10 ;  counter++){
list.textContent("item " +counter);
        }
unord.appendChild(list);
    });
}