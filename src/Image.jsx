function Image(props) {
  return (
    <>
      <article>
        <img src={props.character} className="gallery-pic" alt ="Simpson Character" />
      </article>
    </>
  )
}

export default Image