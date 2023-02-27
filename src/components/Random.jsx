import React from 'react'

const Random = (props) => {
	const {min, max} = props;
  const getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <p className="random">
      Random value between {min} and {max} => {getRandom}
    </p>
    )
  }

export default Random;