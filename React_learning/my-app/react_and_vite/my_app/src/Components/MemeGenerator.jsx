import { useState } from "react";

export default function MemeGenerator() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { value } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: value,
    }));
  }
  function HandleAnotherChange(event) {
    const { value } = event.currentTarget;
    setMeme(prevValue =>({
        ...prevValue,
        bottomText:value
    }))
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
          />
        </label>

        <label>
          Bottom Text
          <input type="text" 
          placeholder="Walk into Mordor" 
          name="bottomText"
          onChange={HandleAnotherChange}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
