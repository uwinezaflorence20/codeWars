export default function Event() {
  console.log("Event component rendered");

  function handleClick() {
    console.log("You clicked Me!!!");
  }
  function handleMouseOver(){
    console.log("I was Hovered!!!")
  }

  return (
    <main className="container text-black flex flex-col justify-center items-center">
      <h1>This is the end</h1>
      <img src="https://picsum.photos/640/360"
      alt="image"
      onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick} className="w-32 m-10 p-4 bg-amber-200">
        Click me
      </button>
    </main>
  );
}
