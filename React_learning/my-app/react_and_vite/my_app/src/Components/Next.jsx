import React from "react";
import { sculptureList } from "../next.js";
export default function Next() {
  const [index, setIndex] = React.useState(0);
  const [show,setShow] =React.useState(false)
  let hasPrev = index>0;
  let hasNext = index < sculptureList.length - 1; 

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }
  function handleBack() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }
  let sculpture = sculptureList[index];
  
  return (
    <div className="text-black mb-10 ">
      <div className="flex flex-row gap-20">
        <button className="p-3 bg-red-300 rounded" onClick={handleClick}>
          next
        </button>
        <button className="p-3 bg-red-300 rounded" onClick={handleBack}>
          back
        </button>
      </div>
      <h1 className="text-2xl font-bold">{sculpture.name}</h1>
      <h1 className="text-2xl font-bold">{sculpture.artist}</h1>
      <h1>
        ({index + 1} of {sculptureList.length})
      </h1>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button className="p-3 bg-red-100 rounded" onClick={()=>setShow(!show)}>{show?"Hide Detail":"Show Details"}</button>
      {show && <h1>{sculpture.description}</h1>} 
    </div>
  );
}
