import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createElement } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
const root = createRoot(document.getElementById("root"));
const reactElement = <h1>Hello from  JSX! </h1>;
root.render(reactElement);


