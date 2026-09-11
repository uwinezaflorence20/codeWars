import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Mental from "./Pages/Mental";
import NotFound from "./Pages/NotFound";
import BookLayout from "./Pages/BookLayout";
import BookRoutes from "./Pages/BookRoutes";
import SideBar from "./Pages/SideBar";
import Users from "./Pages/Users";
import Dashboard from "./Pages/Dashboard";
import Setting from "./Pages/Setting";
import Layout from "./Pages/Layout";
import Help from "./Pages/Help";
import Projects from "./Pages/Projects";
import Calendars from "./Pages/Calendars";
import Tasks from "./Pages/Tasks";
import Reporting from "./Pages/Reportings";
function App() {
  return (
    <div className="bg-[#2B3452] h-screen text-white ">
      <BrowserRouter>
        {/* <Routes>
         <Route path="/book" element ={<h1>Extra Content</h1>}/>
      </Routes> */}
        <header>
          <nav className="flex  justify-between">
            <div>
              <NavLink to="/">
                <h1 className="text-3xl font bold ">Jobarouter</h1>
              </NavLink>
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
              <NavLink
                to="side"
                className=" bg-orange-500 px-6 py-4 hover:bg-amber-500"
              >
                {" "}
                SideBar
              </NavLink>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mental" element={<Mental />} />

            {/* <Route path ="book" element ={<BookList/>}/>
            <Route path ="/book/:id" element={<Book/>}/>
             <Route path ="/book/new" element={<NewBooks/>}/> */}
            <Route path="/book/*" element={<BookRoutes />} />

            <Route path="/side" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="user" element={<Users />} />
              <Route path="setting" element={<Setting />} />
              <Route path="help" element={<Help />} />
              <Route path="project" element={<Projects />} />
              <Route path="calendars" element={<Calendars />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="reporting" element={<Reporting/>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;
