import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route,Link, BrowserRouter } from "react-router-dom";
import Basic from "./Components/Basic";
import About from "./Components/About";
function App() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Routes>
      <Route path="/" element={<Basic/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
