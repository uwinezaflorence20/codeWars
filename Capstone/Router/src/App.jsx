import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Mental from "./Pages/Mental";
import Book from "./Pages/Book";
import BookList from "./Pages/BookList"
import NewBooks from "./Pages/NewBooks";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <div className="bg-[#2B3452] h-screen text-white ">
      <BrowserRouter>
        <header>
          <nav className="flex  justify-between">
            <div>
          <NavLink to="/"><h1 className="text-3xl font bold ">Jobarouter</h1></NavLink>  
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
              <NavLink
                to="mental"
                className=" bg-orange-500 px-6 py-4 hover:bg-amber-500"
              >
                {" "}
                Mental Answer
              </NavLink>
               <NavLink
                to="book"
                className=" bg-orange-500 px-6 py-4 hover:bg-amber-500"
              >
                {" "}
                Books
              </NavLink>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path ="/mental" element={<Mental/>}/>
            {/* <Route path ="book" element ={<BookList/>}/>
            <Route path ="/book/:id" element={<Book/>}/>
             <Route path ="/book/new" element={<NewBooks/>}/> */}
             <Route path="/book">
             <Route index element={<BookList/>}/>
             <Route path=":id" element={<Book/>}/>
             <Route path=":new" element={<NewBooks/>}/>
             </Route>
             <Route path = "*" element={<NotFound/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;
