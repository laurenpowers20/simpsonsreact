import React, { useState } from "react";
import App from './App';

function Simpson() {
  const [character, setCharacter] = useState("");



  const handleClick = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((res) => res.json())
      .then((res) => ((document.querySelector("#image").src = res[0].image)))
      .then((res) => ((document.querySelector("#character").src = res[0].character)))
          .then((res) => setCharacter(res))
      }
  return (
      <div>
      <img id="image" src="" />
        <div>
        <button onClick={handleClick} id="newCharacter">Click for character</button>
        </div>
      </div>
    );
  }



export default Simpson