import React from "react";
export default function Todo() {
  let [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [checked, setChecked] = React.useState(null);
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
            className="border-2 border-red-500 p-6 w-[600px] bg-white shadow-xl rounded"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </form>
        <button
          className="absolute text-xl font-bold text-white ml-[500px] bg-[#008989] px-2 rounded-full mt-2"
          onClick={handleAddTodo}
        >
          +
        </button>
      </div>
      <div className="flex justify-center mt-10 ">
        <h1 className=" flex flex-col justify-start items-start  ">
          {todos.map((data, index) => (
            <h1 key={index} className="flex  space-x-4 ">
              <div className="">
              <input
                type="checkbox"
                checked={checked === index}
                onChange={() => setChecked(checked === index ? null : index)}
              />
              </div>
              <div>
              <span className={checked === index ? "line-through" : ""}>
                {data}
              </span>
              </div>
              <div className="ml-80 flex justify-center ">
              <button
                className="text-red-600 ml-10 font-bold bg-gray-300 p-2  rounded-full "
                onClick={() => setTodos(todos.filter((_, i) => i !== index))}
              >
                X
              </button>
              </div>
            </h1>
          ))}
        </h1>
      </div>
    </div>
  );
}
