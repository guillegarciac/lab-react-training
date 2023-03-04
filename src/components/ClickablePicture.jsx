import React, {useState} from 'react'

export default function ClickablePicture({img, imgClicked}) {
  const [image, setImage] = useState(img)
  
  const handleClick = () => {
    const addImage = image === img ? imgClicked : img;
    setImage(addImage)
  }

  return (
    <div>
      <img onClick={handleClick} src={image} alt="boyImage" />
    </div>
  )
}