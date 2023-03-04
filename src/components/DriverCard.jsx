import React from "react";
import Rating from "./Rating";

const DriverCard = (props) => {
  const {driver: {name, rating, img, car}} = props;
  return (
    <div className="driverCard">
      <img src={img} alt="driverImage" />
      <div className="driverDetails">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard;
