import React from "react"
import padsData from "../pads"
import Pad from './Pad.jsx'

export default function Pads() {
    const [pads,setPads] = React.useState(padsData)

    // const styles = {
    //     backgroundColor: darkMode ? "#222222" : "#cccccc"
    // }

    //   function turnAllPadsOff() {
    //     console.log("Turning off")
    //     setPads(prevPads => prevPads.map(pad => ({
    //         ...pad,
    //         on: false
    //     })))
    // }
    function toggle(id){
        console.log(id);
        //map over the pad array if the currecnt item has the same id as the one passed to 
   setPads(prevPads=>prevPads.map(item=>{
    return item.id === id?{...item,on:!item.on}: item
   }))
    }
  
    

    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />
    ))

    return (
        <main className="mai">
            <div className="pad-container">
                {buttonElements}
            </div>
             {/* <button className="all-off" on onClick={flipped}>Turn All Off</button> */}
        </main>
    )
}
