import { useState } from "react";
import { useEffect } from "react";

export default function MemeGenerator() {
  const [meme, setMeme] = useState({
    topText: "one does not simpley",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const[allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((data)=>data.json())
    .then((data)=>console.log(setAllMemes(data.data.memes)));
  },[]);



  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  function HandleAnotherChange(event) {
    const { value } = event.currentTarget;
    setMeme((prevValue) => ({
      ...prevValue,
      bottomText: value,
    }));
  }

  return (
    <main>
      <div className="form text-black">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={HandleAnotherChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={} >Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
