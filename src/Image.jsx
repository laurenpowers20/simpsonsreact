import Modal from "./Modal"
import { useState } from "react"

function Image(props) {
  const [showModal, setShowModal] = useState(false);

  return (  
    <div className="gallery">
      <div>
        <img src={props.image} className="gallery-pic" alt="Simpson Character" />
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          quote={props.quote}
          name={props.character}
        />
        <div>
          <button onClick={() => setShowModal(true)}>Get info!</button>
          </div>
      </div>
    </div>
  )
}

export default Image