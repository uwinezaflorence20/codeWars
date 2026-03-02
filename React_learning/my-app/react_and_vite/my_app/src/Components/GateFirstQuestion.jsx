//  Create a login form with email and password fields:

//  Make it a controlled component.
//  Show an error message if the password is less than 6 characters.
// Add a button that toggles between showing and hidingthepassword.
import React from "react";

export default function GateFirstQuestion() {
  const [pass, setPass] = React.useState("");
  const borderColor =pass.length === 0 ? "gray" : pass.length >= 6 ? "green" : "red";
    const borderMessage = pass.length >= 6 ? <h1>The message is long enough</h1> : <h1>The message is short</h1>;
  const [email, setEmail] = React.useState("");
  const isValidEmail = email.includes("@");
  const [showPassword, setShowPassword]= React.useState(false);
  function show(){
    setShowPassword(prev =>!prev);
  }
  return (
    <section className="bg-red-300  h-80 text-black flex flex-col justify-center  m-20">
      <form action="">
        <input
          type="email"
          className="border-amber-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            border: isValidEmail ? "2px solid green" : "2px solid red",
          }}
          
          placeholder="please enter the email"
        />
        <br />

        <input
          type={showPassword?"text":"password"}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={{
            border: `4px solid ${borderColor}`,
          }}
         
        />
        {borderMessage}
        <button 
        type='button' 
        className="bg-red-600 text-white w-10"
        onClick={show}
        > show hide </button>
      </form>
    </section>
  );
}
