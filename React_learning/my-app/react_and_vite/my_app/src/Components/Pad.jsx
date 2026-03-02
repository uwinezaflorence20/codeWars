
import React from "react"
export default function Pad(props){
    console.log(props.id);

return(
    <button style={{backgroundColor:props.color,}} 
    className={props.on ? 'on':undefined}
    onClick={()=>props.toggle(props.id)}
    ></button>
)
}