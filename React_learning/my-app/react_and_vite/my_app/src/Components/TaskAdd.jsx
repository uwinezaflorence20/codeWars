import React from "react";
export default function TaskAdd() {
    let[tasks,setTasks]=  React.useState([]);
    let ArrayTask = tasks.map(task=>(<li key={task}>{task}</li>));
 function FormSubmitted(formData){
    let form = formData.get("task");
    setTasks(task =>[...task,form])
 }

  return (
    <section className="text-black text-center p-40  h-20">
        <h1 className="text-2xl text-fuchsia-300 font-bold">This is my Project exercises</h1>
      <form action={FormSubmitted}>
        <input type="text" name="task" className="bg-fuchsia-300" />
         <button className="bg-fuchsia-300">Add task</button>
        <ul>{ArrayTask}</ul>
       
      </form>
    </section>
  );
}
