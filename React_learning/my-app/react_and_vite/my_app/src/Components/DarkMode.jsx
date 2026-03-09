export default function DarkMode() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button className="bg-red-700 p-4 rounded-4xl text-black ml-60 mb-10" onClick={handleClick}>
      Toggle the lights
    </button>
  );
}

