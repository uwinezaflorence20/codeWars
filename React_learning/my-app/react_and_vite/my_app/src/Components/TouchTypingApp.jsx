import { useState } from "react";

const TouchTypingApp = () => {
  const sentence =
    "The quick brown fox jumps over the lazy dog.";
  const [userInput, setUserInput] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const isCorrect = userInput === sentence.slice(0, userInput.length);

  const isWrong =userInput.length > 0  &&  userInput !== sentence.slice(0, userInput.length);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= sentence.length) {
      setUserInput(value);
      if (value === sentence) {
        setIsCompleted(true);
      } else {
        setIsCompleted(false);
      }
    }
  };
  const resetApp = () => {
    setUserInput("");
    setIsCompleted(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Touch Typing App
      </h1>
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-lg font-mono text-gray-700">
          {sentence.split("").map((char, index) => (
            <span
              key={index}
              className={`
                ${
                  index < userInput.length
                    ? userInput[index] === char
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                    : index === userInput.length
                    ? "bg-yellow-200"
                    : "text-gray-600"
                }
              `}
            >
              {char}
            </span>
          ))}
        </p>
      </div>

      {/* INPUT */}
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Start typing the sentence..."
        disabled={isCompleted}
        className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg font-mono focus:border-blue-500 focus:outline-none"
      />

      {/* STATUS */}
      <div className="mt-6 text-center">
        {isCompleted ? (
          <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
            <p className="text-2xl font-bold text-green-800">
              🎉 Congratulations!
            </p>
            <p className="text-green-700 mt-2">
              You completed the sentence correctly!
            </p>
          </div>
        ) : userInput.length === 0 ? (
          <p className="text-gray-500 text-lg mt-4">
            Start typing to begin...
          </p>
        ) : isCorrect ? (
          <p className="text-green-700 font-semibold mt-4">
            Correct so far 👍
          </p>
        ) : (
          <p className="text-red-600 font-semibold mt-4">
            Mistake detected ❌
          </p>
        )}
      </div>

      {/* PROGRESS */}
      <div className="mt-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>
            {userInput.length} / {sentence.length}
          </span>
        </div>

        <div className="w-full bg-gray-200 h-3 rounded-full">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all"
            style={{
              width: `${(userInput.length / sentence.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* RESET BUTTON */}
      {(userInput.length > 0 || isCompleted) && (
        <div className="text-center mt-6">
          <button
            onClick={resetApp}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default TouchTypingApp;