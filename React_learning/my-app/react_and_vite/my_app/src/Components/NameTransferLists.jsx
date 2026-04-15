import { useEffect, useState } from "react";

const NameTransferLists = () => {
  // ✅ First list in state (so we can remove items)
  const [firstList, setFirstList] = useState([
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "Diana Prince",
    "Ethan Hunt",
  ]);

  const [secondList, setSecondList] = useState([]);

  // =========================
  // AUTO TRANSFER LOGIC
  // =========================
  useEffect(() => {
    const interval = setInterval(() => {
      setFirstList((prevFirst) => {
        if (prevFirst.length === 0) {
          clearInterval(interval);
          return prevFirst;
        }

        const nextName = prevFirst[0]; // take first name

        // move to second list
        setSecondList((prevSecond) => [...prevSecond, nextName]);

        // remove from first list
        return prevFirst.slice(1);
      });
    }, 2000);

    // cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Name Transfer App (Every 2 Seconds)
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {/* First List */}
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            First List
          </h2>

          <ul className="space-y-2">
            {firstList.map((name, index) => (
              <li
                key={`first-${name}-${index}`}
                className="text-blue-700"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Second List */}
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-800 mb-4">
            Second List
          </h2>

          <ul className="space-y-2">
            {secondList.map((name, index) => (
              <li
                key={`second-${name}-${index}`}
                className="text-green-700"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NameTransferLists;