// Exercise: “Username & Age Form”
// Requirements:

// Create a form with two fields:

// Username (text)

// Age (number)

// Make them controlled components.

// Validation rules:

// Username: must be at least 4 characters.

// Empty → gray border

// Less than 4 → red border

// 4 or more → green border

// Age: must be between 18 and 60.

// Empty → gray border

// Less than 18 or more than 60 → red border

// Valid age → green border

// Add a button to toggle showing the age (instead of password toggle).

// Display error messages under each field if the value is invalid.

// Optional: Add a submit button that only works if both fields are valid.

import React from "react"
export default function AngeandUsername(){
    const[userName,setUserName] = React.useState("");
    const borderColor = userName.length ===0 ? 'gray':userName.length < 4 ?'red':'green';

    return(
        <section className="h-80 mt-10 text-white  bg-black m-20 p-20">
        <form action="">
        <input 
        type="text"
        value={userName}
        style={{
            border: `3px solid ${borderColor}`, // make border thicker
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "black", // keep input black
            color: "white",
        }}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder="enter your username"
        />
        </form>
        </section>
    )
}