import React from "react";
export default function FormHandlers() {
  let [firstName, setFirstName] = React.useState("");
  let [lastName, setLastName] = React.useState();

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <div className="mb-10">
    <form onSubmit={(e) => e.preventDefault()} className="text-black">
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button className="text-black bg-amber-700 mx-96 p-2 rounded" onClick={handleReset}>Reset</button>
    </form>
    </div>
  );
}
