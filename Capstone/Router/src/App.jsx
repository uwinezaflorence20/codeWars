import React from "react";
import "./App.css";
import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
function App() {
  return (
    <div className="bg-[#2B3452] h-screen text-white">
      <BrowserRouter>
        <header>
          <nav className="flex  justify-between">
            <div>
              <h1 className="text-3xl font bold ">Jobarouter</h1>
              <hr className=" w-32 p-2 text-orange-500 font-bold " />
            </div>
            <div className="flex  gap-4">
              <NavLink
                to="/"
                className=" bg-orange-500 px-6 py-4  hover:bg-amber-500"
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                className=" bg-orange-500 px-6 py-4 hover:bg-amber-500"
              >
                {" "}
                About
              </NavLink>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;
