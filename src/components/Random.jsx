import React from 'react'

const Random = (props) => {
	const {min, max} = props;
  const getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return (<p>{getRandom}</p>)
  }

export default Random;