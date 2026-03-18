import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Basic from "./Components/Basic";
import About from "./Components/About";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Basic/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}
export default App;
