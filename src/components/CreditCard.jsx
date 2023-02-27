import React from "react";
import visa from "../assets/images/visa.png"
import mastercard from "../assets/images/mastercard.png"

const CreditCard = (props) => {
  const {card: {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}} = props;
  
  let imageCC = "";
  switch(type) {
    case "Visa": imageCC = visa; break;
    case "Master Card": imageCC = mastercard; break;
    default: imageCC = "";
  };
  const hashNumber = "**** **** **** " + number.slice(12, 16);

  const creditCardStyle = {
    backgroundColor: bgColor,
    color: color,
  }

  return (
    <div className="credit-card" style={creditCardStyle}>
			<img width="40px" src={imageCC} alt="logo" />
      <h2>{hashNumber}</h2>
			<div className="card-data">
				<p>Expires: {expirationMonth}/{expirationYear} {bank}</p>
        <p>{owner}</p>
			</div>
		</div>
  )
}

export default CreditCard;