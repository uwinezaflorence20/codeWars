
export default function FeedbackForm2() {
  

  function handleClick() {
    let name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button className="text-black bg-amber-700 ml-80 p-3 rounded" onClick={handleClick}>
     Click Greet
    </button>
  );
}
