import React from "react"

export default function StateCount() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    let [count,setCount] = React.useState(0);
  function add(){
   setCount(count+1);
  }
  function minus(){
    setCount(count-1)
  }

    return (
        <main className="container1 bg-black ">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter1">
                <button onClick={minus} className="minus1" aria-label="Decrease count">–</button>
                <h2 className="count1">{count}</h2>
                <button onClick={add} className="plus1" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
