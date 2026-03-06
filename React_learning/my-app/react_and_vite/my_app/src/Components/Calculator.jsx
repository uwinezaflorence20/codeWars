import React from "react";
import calculatorData from "../calculatorData";

export default function Calculator() {
  const [display, setDisplay] = React.useState("");

  function dis(dat) {
    const value = dat.label;

    if (value === "AC") {
      setDisplay(""); 
    } else if (value === "=") {
      try {
        const expression = display.replace(/×/g, "*").replace(/÷/g, "/");
        const result = eval(expression);// evalute a string as a number for example ("7+2") will be 9 as it should even if it a string
        setDisplay(result.toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(prev => prev + value);
    }
  }

  return (
    <div className="px-16 pb-40 h-auto">
      <div className="rounded-2xl">
        <div className="bg-[#4A4A4A] rounded-t-2xl text-4xl font-bold h-20 flex items-center justify-end px-4 text-white">
          {display || "0"}
        </div>

        <div className="grid grid-cols-4 gap-2 mt-2">
          {calculatorData.map((row, rowIndex) =>
            row.map((btn, btnIndex) => (
              <button
                key={`${rowIndex}-${btnIndex}`}
                onClick={() => dis(btn)}
                className={`px-10 py-4 text-xl text-black
                  ${btn.color === "light"
                    ? "bg-[#E8E8E8] hover:bg-gray-300 text-black border border-gray-300"
                    : ""}
                  ${btn.color === "orange"
                    ? "bg-orange-400 hover:bg-amber-700 text-white border border-gray-300"
                    : ""}
                `}
              >
                {btn.label}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
