import { useState } from "react";
const Mental = () => {
  const [password, setPassword] = useState("");

  const isEight = password.length >= 8;
  const isUpperCase = password !== password.toLowerCase();
  const isLowerCase = password !== password.toUpperCase();
  const isDigit = password.split("").some((c) => c >= "0" && c <= "9");
  const specialChars = "!@#$%^&*()_+-={}[]|:;\"'<>,.?/~`";
  const hasSpecial = specialChars.split("").some((s) => password.includes(s));

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setPassword("");
  };
  return (
    <div className="bg-white h-screen text-black flex flex-col items-center ">
      <h1 className="text-4xl font-bold">Create Password</h1>
      <h1 className="text-xl text-gray-300">Enter a secure password</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="pt-10 space-y-4 text-xl"
      >
        <input
          type="password"
          placeholder="Enter the password"
          className="border-2 border-gray-200 rounded-xl  w-96 h-10 px-4"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <h1>Password Requirement</h1>
        <input type="radio" id="req1" checked={isEight} readOnly /> At least 8
        characters <br />
        <input type="radio" id="req2" checked={isUpperCase} readOnly /> Contains
        uppercase character <br />
        <input type="radio" id="req3" checked={isLowerCase} readOnly /> Contains
        lowercase letter <br />
        <input type="radio" id="req4" checked={isDigit} readOnly /> Contains a
        digit
        <br />
        <input type="radio" id="req4" checked={hasSpecial} readOnly /> Contains
        a special character
        <br />
        <button className="bg-gray-500 h-10 w-96 rounded-2xl" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Mental;
