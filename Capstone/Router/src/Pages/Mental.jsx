const Mental = () => {
  return (
    <div className="bg-white h-screen text-black flex flex-col items-center ">
      <h1 className="text-4xl font-bold">Create Password</h1>
      <h1 className="text-xl text-gray-300">Enter a secure password</h1>
      <form action="" className="pt-10 space-y-4 text-xl">
        <input
          type="password"
          placeholder="Enter the password"
          className="border-2 border-gray-200 rounded-xl  w-96 h-10 px-4"
        />
        <h1>Password Requirement</h1>
        <input type="radio" id="req1" /> At least 8 characters <br />
        <input type="radio" id="req2" /> Contains uppercase character <br />
        <input type="radio" id="req3" /> Contains lowercase letter <br />
        <input type="radio" id="req4" /> Contains a digit
        <br />
        <input type="radio" id="req4" /> Contains a special character
        <br />
      </form>
      <button className="bg-gray-500 h-10 w-96 rounded-2xl">Submit</button>
    </div>
  );
};
export default Mental;
