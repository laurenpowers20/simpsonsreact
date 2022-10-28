import React, { useState, useEffect } from "react";
import Image from "./Image";

function Gallery() {
  const [images, setImages] = useState([])
  // const [gallery, setGallery] = useState(false)

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=10`)
      const data = await response.json()
      setImages(data)
    }
    fetchImages()
  },[])
  return (
    <>
      {!images ? (
        <h2 className="flex items-center justify-center h-screen font-bold text-center">Loading..</h2> ) : (
        <section>
          <button>Get 5!</button>
          <div className="gallery">
            {images.map((image) => (
              <Image key={image.image} {...image} />
            ))}
          </div>
  
        </section>
     )}
      </>
  )
}

export default Gallery