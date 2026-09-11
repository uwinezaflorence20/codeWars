import calculatorData from "../calculatorData";
import React from "react";
export default function ProjectCalculator() {
  const [display, setDisplay] = React.useState("");

  function dis(dat) {
    if (dat.label === "AC") {
      setDisplay("");
    } else if (dat.label === "=") {
      const expression = display.replace(/×/g, "*").replace(/÷/g, "/");
      let result = eval(expression);
      setDisplay(result);
    } else {
      setDisplay((prev) => prev + dat.label);
    }
  }
  return (
    <div className=" px-16 pb-40  h-auto ">
      <div className=" rounded-2xl">
        <div className="bg-[#4A4A4A] rounded-t-2xl  text-4xl font-bold h-20 flex justify-end pt-10 ">
          {display || "0"}
        </div>
        <div className="grid grid-cols-4">
          {calculatorData.map((row, rowIndex) =>
            row.map((btn, btnIndex) => (
              <button
                key={`${rowIndex}-${btnIndex}`}
                onClick={() => dis(btn)}
                className={`px-10 py-4 text-xl text-black ${btn.label === '0'? "col-span-2":""} 
                ${btn.color === "light" ? "bg-[#E8E8E8] hover:bg-gray-300 text-black border-1 border-gray-300" : ""}
                ${btn.color === "orange" ? "bg-orange-400 hover:bg-amber-700 border-1 border-gray-300" : ""}
                `}
              >
                {btn.label}
              </button>
            )),
          )}
        </div>
      </div>
    </div>
  );
}
