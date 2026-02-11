import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
// import { createElement } from 'react';
// import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// const root = createRoot(document.getElementById("root"));
// const reactElement = <h1>Hello from  JSX! </h1>;
// root.render(reactElement);
// const root2 = createRoot(document.getElementById("root"));
// let ele = React.createElement("h1",null,"Hello, React");
// root2.render(ele);

// const h1 = document.createElement("h1")
// h1.textContent = "This is imperative coding"
// h1.className = "header"
// document.getElementById("root").appendChild(h1)


// const root = createRoot(document.getElementById('root'));
// root.render(
// temporaryNames()
// )

// function temporaryNames(){
//   return (<div>
//     <img src="../src/assets/react.svg"/>
// <h1> Fun facts about React</h1>
// <ul>
//   <li>Was first released in 2013</li>
//   <li>Was originally created by jordan walkie</li>
//   <li>Has well over 100k hits on githubs</li>
//   <li>Is maintained by Meta</li>
//   <li>Powers thousands of rnterprise apps, including mobile apps</li>
// </ul>

// </div>
//   )
// }

const  root = createRoot(document.getElementById("root"));
function Page(){
  return(
    <div>
      <ol>
        <li>getting more skill on react</li>
        <li>becoming professional with react</li>
        <li>pass the gate</li>
      </ol>
    </div>
  )
}

function Header(){
  return(
    <div><img src="../src/assets/react.svg" alt="This is a react logo" />
    <h1>Reasons I'm excited to learn React</h1>
    <main>
      <ol>
        <li>Nothing special</li>
        <li>something special</li>
        <li>i don't know</li>
      </ol>
    </main>
    </div>
    
  )
}
function Footer(){
  return(
    <div>
      <p>© 2024 Florence  development. All rights reserved.</p>
    </div>
  )
}
root.render(
  <div>
    <Header/>
    <Footer/>
    <Page/>

  </div>

);

