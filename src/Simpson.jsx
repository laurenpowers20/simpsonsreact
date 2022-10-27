import React, { useState } from "react";
import App from './App';

function Simpson() {
  const [character, setCharacter] = useState("");

  const handleClick = (e) => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((res) => res.json())
      .then((res) => setCharacter(res));
  };
    return (
      <div>
         <button onClick={handleClick} id="character">Click for character</button>
      
        <div>{character.character}</div>
      </div>
    );
  }



export default Simpson