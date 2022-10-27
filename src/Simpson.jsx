import React, { useState } from "react";
import App from './App';

function Simpson() {
  const [character, setCharacter] = useState("");

  const handleClick = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((res) => res.json())
      .then((res) => (
        (document.querySelector("#image").src = res[0].image))
       
          .then((res) => setCharacter(res)))
      }
    return (
      <div>
         <button onClick={handleClick} id="character">Click for character</button>
      
        <div>
          <h2 id="character"> </h2>
          <img id="image" src="" /></div>
      
      </div>
    );
  }



export default Simpson