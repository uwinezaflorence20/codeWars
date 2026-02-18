import React from "react"

export default function HookUseState() {
    
    let  [isImportant,setIsImportant]  = React.useState("Yes")   
   function handleClick(){
    setIsImportant("Definitely");
   }
    return (
        <main className="bg-black">
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value text-black w-20 h-20 rounded-full bg-white">{isImportant}</button>
        </main>
    )
}
