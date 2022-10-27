import "./App.css";
import Simpson from "./Simpson";
import Modal from "./Modal";
import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <Simpson />
      <div className="App">
        <button onClick={() => setShowModal(true)}>Show Modal</button>

        <Modal onClose={() => setShowModal(false)} show={showModal} />
      </div>
    </div>
  );
}

export default App;
