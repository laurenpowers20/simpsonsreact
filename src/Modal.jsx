import Simpson from "./Simpson"


function Modal(props) {
  console.log(props)
  if (!props.show) {
    return null
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title"></h4>
        </div>
        <div className="modal-body">Quote</div>
        <p>{props.quote}</p>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )

}

export default Modal