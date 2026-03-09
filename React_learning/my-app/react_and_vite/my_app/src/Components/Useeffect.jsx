import React from "react";
import { useEffect } from "react";
export default function Useeffect(){
     const [count,setCount]= React.useState(0);
        useEffect(()=>{
            setTimeout(()=>{
                setCount((count)=>count+1)
            },1000)
        },[]);
    return(
       <div>
        <h1 className="text-black p-2">I've rendered {count} times</h1>
       </div>
    )
}