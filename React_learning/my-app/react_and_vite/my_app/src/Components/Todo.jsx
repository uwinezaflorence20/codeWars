import React from "react";
export default function Todo() {
  let [todo, setTodo] = React.useState("")
  const [todos, setTodos] = React.useState([])
  const handleAddTodo=()=>{
    if(todo.trim()==="") return "";
    setTodos([...todos,todo]);
    setTodo("");
  }

  return (
    <div className="text-black py-40">
      <div className="text-gray-400">
        <h1 className="text-6xl py-20">todos</h1>
      </div>
      <div className="flex">
        <form action="">
            <input type="text"
            placeholder="Add todo"
            className=" border-2 border-b-gray-700"
            onChange={(e)=>setTodo(e.target.value)}
            value={todo} 
             />
             <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by dmitri13 - Flaticon</a>
             
        </form>
        <button className="p-2 bg-red-600 rounded-full" onClick={handleAddTodo}>+</button>
      </div>
        <div>
        <ul>{todos.map((data,index)=>(
          <li key ={index}>{data}</li>
        ))}</ul>
        </div>
    </div>
  );
}
