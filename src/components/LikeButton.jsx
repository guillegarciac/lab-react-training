import React, {useState} from 'react'

export default function LikeButton() {
  const [likes, setLikes] = useState(0)
  
  const colorsArray = ['purple','blue','green','yellow','orange','red']
  
  const style = {
    backgroundColor: `${colorsArray[Math.floor(Math.random() * colorsArray.length)]}`
  }

  const handleIncrease = () => {
    setLikes(prev => prev + 1)
  }


  return (
    <div>
      <button className="btn-like" onClick={handleIncrease} style={style}>{likes}likes</button>
    </div>
  )
}

