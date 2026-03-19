import React from "react";
import './App.css'
import { Routes, Route,Link, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
function App() {
  return (
    <BrowserRouter >
    <Main>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
    </Routes>
    </Main>
    </BrowserRouter>
  );
}
export default App;
