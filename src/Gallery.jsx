import React, { useState, useEffect } from "react";
import Image from "./Image";

function Gallery() {
  //const [images, setImages] = useState([])
  const [character, setCharacter] = useState([])
  const [gallery, setGallery] = useState(false)

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=4`)
      const data = await response.json()
      setCharacter(data)
    }
    fetchCharacters()
  }, [])
 
    return (
      <>
        {!character ? (
          <h2 className="flex items-center justify-center h-screen font-bold text-center">Loading..</h2>) : (
          <section>
            <div className="gallery">
              {character.map((character) => (
                <Image key={chararcter.character} {...character} />
              ))}
            </div>
  
          </section>
        )}
      </>
    )
  }


export default Gallery