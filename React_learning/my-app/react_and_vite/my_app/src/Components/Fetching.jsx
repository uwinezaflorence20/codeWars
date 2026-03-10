import React, { useEffect, useState } from "react";

export default function fetching() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="text-black ">
      <h1 className="font-bold text-2xl">The list of the names</h1>
      <ul className="">
        {user.map((da) => (
          <li key={da.id}>{da.name}</li>
        ))}
      </ul>
    </div>
  );
}
