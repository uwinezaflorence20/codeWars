import React from "react"

export default function StateCount() {
let [count , setCount]= React.useState(0);
function addition(){
setCount(prevCount => prevCount+1 );
}
function minus(){
    setCount(prevCount=>prevCount-1);
}
    return (
        <main className="container1 bg-black ">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter1">
                <button onClick={minus} className="minus1" aria-label="Decrease count">–</button>
                <h2 className="count1">{count}</h2>
                <button onClick={addition} className="plus1" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
