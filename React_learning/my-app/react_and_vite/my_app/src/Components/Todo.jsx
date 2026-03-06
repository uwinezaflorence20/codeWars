import React from "react";
export default function Todo() {
  let [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const[checked,setChecked] = React.useState(false)
  const handleAddTodo = () => {
    if (todo.trim() === "") return "";
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="text-black py-40">
      <div className="text-gray-400">
        <h1 className="text-6xl py-20">todos</h1>
      </div>
      <div className="flex justify-center">
        <form action="">
          <input
            type="text"
            placeholder="Add todo"
            className=" border-2 border-b-gray-700"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
        </form>
        <button className="p-2 bg-red-600 rounded-full" onClick={handleAddTodo}>
          +
        </button>
      </div>
      <div className="flex justify-center ">
        <h1 className=" flex flex-col justify-start items-start  ">
          {todos.map((data, index) => (
            <h1 key={index} className={checked?"line-through":""} >
              <input type="checkbox"
              onChange={(e)=>setChecked(e.target.checked) }
              />
              {data }
              <button
                className="text-red-600 ml-10 font-bold bg-gray-300 p-2 rounded-full"
                onClick={() => setTodos(todos.filter((_, i) => i !== index))}
              >
                X
              </button>
            </h1>
          ))}
        </h1>
      </div>
    </div>
  );
}
