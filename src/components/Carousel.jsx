import React, {useState, useEffect} from 'react'

//takes images props from App.js (array of images)
export default function Carosuel({images}) {
  
  //takes two state variables using useState
  //1. imageIndex as the index of the currently displayed image
  //2. image as the URL of the currently displayed image which is initialized with images[imageIndex]
  const [imageIndex, setImageIndex] = useState(Math.floor(Math.random() * images.length));
  const [image, setImage] = useState(images[imageIndex]);

  //useEffect runs whenever imageIndex or images change and updates the image state variable to the URL corresponding to the current imageIndex.
  useEffect(() => {
    setImage(images[imageIndex])
  }, [imageIndex, images]);
  
  //sets imageIndex to 0 (to start the carousel from the beginning). Otherwise, it increments imageIndex by 1 to display the next image in the array.
  const handleRight = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(prev => prev + 1);
    }
  }

  //If the current imageIndex is already at the beginning of the images array, it sets imageIndex to the last index of the array (to loop back to the end of the array). Otherwise, it decrements imageIndex by 1 to display the previous image in the array.
  const handleLeft = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(prev => prev - 1);
    }
  }

  //renders a div element containing the left and right buttons, and an img element with the src attribute set to the URL of the currently displayed image (image). The left and right buttons are wired up to their respective event handler functions using the onClick attribute.
  return (
    <div>
      <button onClick={handleLeft}>Left</button>
      <img src={image} alt="startImage" />
      <button onClick={handleRight}>Right</button>
    </div>
  )
}
