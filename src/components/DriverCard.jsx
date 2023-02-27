import React from "react";
import Rating from "./Rating";

const DriverCard = (props) => {
  const {driver: {name, rating, img, car}} = props;
  return (
    <div>
      <img src={img} alt="driverImage" />
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard;