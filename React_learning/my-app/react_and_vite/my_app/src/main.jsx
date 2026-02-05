import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
// import { createElement } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
const root = createRoot(document.getElementById("root"));
const reactElement = <h1>Hello from  JSX! </h1>;
root.render(reactElement);
// const root2 = createRoot(document.getElementById("root"));
// let ele = React.createElement("h1",null,"Hello, React");
// root2.render(ele);

const h1 = document.createElement("h1")
h1.textContent = "This is imperative coding"
h1.className = "header"
document.getElementById("root").appendChild(h1)



