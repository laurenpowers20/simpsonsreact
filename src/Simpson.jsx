import React, { useState } from "react";
import Modal from "./Modal";
import App from './App';

function Simpson() {
  const [character, setCharacter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((res) => res.json())
      .then((res) => ((document.querySelector("#image").src = res[0].image)))
      .then((res) => ((document.querySelector("#character").src = res[0].character)))
      .then((res) => setCharacter(res))
      .then((res) => (console.log(res[0]) ))

  }

  return (
    <div>
      {character}
      <img id="image" src="" />
        <div>
        <button onClick={handleClick} id="newCharacter">New Character!</button>
        <Modal onClose={() => setShowModal(false)} show={showModal}  />
        <button onClick={() => setShowModal(true)}>Get info!</button>
        </div>
      </div>
    );
  }



export default Simpson