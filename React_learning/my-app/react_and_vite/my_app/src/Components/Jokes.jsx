import React from "react"
export default function Jokes(props){
    let[isShown, setIsshown] = React.useState(false)
    // const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])
    function toggleShown(){
        setIsshown(prevShown => !prevShown);
    }
    console.log(isShown)
    return(
        <div className="text-black">
            {<p>The SetUp: {props.Setup}</p>}
            
               {/* {isShown === true && <p>The PunchLines: {props.Punchline}</p>}  */}
               {isShown ? <p>The PunchLines: {props.Punchline}</p>:null} 
                <hr />
                <button onClick={toggleShown} className="">{isShown ? "Hide":"Show"} punchline</button>

             <div>
            {/* {
                unreadMessages.length > 0 && 
                <h1>You have {unreadMessages.length} unread messages!</h1>
            } */}
        </div>
        </div>
        
    )
}