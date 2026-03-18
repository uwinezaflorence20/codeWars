import React from "react";
import './App.css'
import ReactDOM from "react-dom/client";
import { Routes, Route,Link, BrowserRouter } from "react-router-dom";
import Basic from "./Components/Basic";
import About from "./Components/About";
function App() {
  return (
    <BrowserRouter >
    <Link  to="/" className="text-2xl mr-10 font-medium">Home</Link>
    <Link to="/about" className="text-2xl font-medium">About</Link>
    <Routes>
      <Route path="/" element={<Basic/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
