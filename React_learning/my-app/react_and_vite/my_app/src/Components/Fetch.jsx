import React from "react";

export default function Fetch() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);
  console.log("Rendered!");

 React.useEffect(()=>{
  fetch(`https://swapi.dev/api/people/${count}`)
.then((data)=>data.json())
.then((data)=>setStarWarsData(data))

 },[count])

  return (
    <div className="text-black pt-20">
      <h1>The count is {count}</h1>
      <button
        className="bg-amber-600 p-3 text-black"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Get next character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
