import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import App from './App';

function Simpson() {
  const [character, setCharacter] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getCharacters = async() => {
    const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    const json = await response.json()
    setCharacter(json)
    
  }

  if (character.length <= 0) {
    return <><h1> Click button for new character</h1>
      <button onClick={getCharacters}>Get Characters</button></>
  } else {
    return (
      <div className="character">
        {character.map((simpsonscharacter) => {
          return <div key={simpsonscharacter.character}>
            {/* <h1>{simpsonscharacter.character}</h1> */}
            <img src={simpsonscharacter.image} alt={simpsonscharacter.characer} />
          </div>
        })}
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          quote={character[0].quote}
          name={character[0].character}
        />
        <button onClick={() => setShowModal(true)}>Get info!</button>
        <button onClick={getCharacters}>New Character!</button>
      </div>
    )
  }
}



export default Simpson