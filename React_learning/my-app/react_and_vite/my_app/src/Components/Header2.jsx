import React from "react"
 export default function Heade2(props){
    let image = "public/filled.jpg";

    return(
<header className=" text-2xl text-black flex flex-row justify-end">
    <img src={image}/>
    <p>{props.userName}</p>
</header>
    )
}