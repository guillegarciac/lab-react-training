import React from 'react'

const IdCard = (props) => {
  const {user: {lastName, firstName, gender, height, birth, picture}} = props;
  return (
    <div className="idCard">
      <img src={picture} alt="userPicture" />
      <div className="cardIDetails">
        <p>First name: {lastName}</p>
        <p>Last name: {firstName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth}</p>
      </div>
    </div>
  )
}

export default IdCard;