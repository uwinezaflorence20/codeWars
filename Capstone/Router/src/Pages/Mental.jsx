import { useState } from "react";
const Mental = () => {
  const [Eight, setEight] = useState("");
  const [upperCase, setUpperCase] = useState("")
  const [lowerCase,setLowerCase] = useState("")
  const [digit,setDigit] =useState("");
  const[special , setSpecial] = useState("");
  const [click,setClick] = useState('')
  

  let handleChange = (e)=>{
    const value = e.target.value;
    setEight(value);
    setUpperCase(value);
    setLowerCase(value);
    setDigit(value);
    setSpecial(value);
    setClick(value);
  }
  let  isEight = Eight.length >=8;
  let isUpperCase = upperCase !== upperCase.toLowerCase();
  let isLowerCase = lowerCase !== lowerCase.toUpperCase();
  let isDigit = digit.split("").some(char => char>="0" && char<="9");
   const specialChars = "!@#$%^&*()_+-={}[]|:;\"'<>,.?/~`";
  const hasSpecial = specialChars.split("").some(s => special.includes(s));

  let isClicked = click?"":"";

  return (
    <div className="bg-white h-screen text-black flex flex-col items-center ">
      <h1 className="text-4xl font-bold">Create Password</h1>
      <h1 className="text-xl text-gray-300">Enter a secure password</h1>
      <form action="" onSubmit={e => e.preventDefault()} className="pt-10 space-y-4 text-xl">
        <input
          type="password"
          placeholder="Enter the password"
          className="border-2 border-gray-200 rounded-xl  w-96 h-10 px-4"
          value={click}
          onChange={handleChange}          
        />
        <h1>Password Requirement</h1>
        <input type="radio" id="req1" checked={isEight} readOnly /> At least 8 characters <br />
        <input type="radio" id="req2" checked={isUpperCase} readOnly /> Contains uppercase character <br />
        <input type="radio" id="req3" checked={isLowerCase} readOnly /> Contains lowercase letter <br />
        <input type="radio" id="req4" checked={isDigit} readOnly /> Contains a digit
        <br />
        <input type="radio" id="req4" checked={hasSpecial} readOnly /> Contains a special character
        <br />
      </form>
      <button className="bg-gray-500 h-10 w-96 rounded-2xl"
      type="submit"
      >Submit</button>
    </div>
  );
};
export default Mental;
