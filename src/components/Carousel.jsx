import React, {useState, useEffect} from 'react'

export default function Carosuel({images}) {
  const [imageIndex, setImageIndex] = useState(Math.floor(Math.random() * images.length));
  const [image, setImage] = useState(images[imageIndex]);

  useEffect(() => {
    setImage(images[imageIndex])
  }, [imageIndex, images]);
  
  const handleRight = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(prev => prev + 1);
    }
  }

  const handleLeft = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(prev => prev - 1);
    }
  }
  
  return (
    <div>
      <button onClick={handleLeft}>Left</button>
      <img src={image} alt="startImage" />
      <button onClick={handleRight}>Right</button>
    </div>
  )
}
