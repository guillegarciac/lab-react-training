import React from "react";

const CreditCard = (props) => {
  const {card: {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}} = props;
  const background = {
    backgroundColor: `${bgColor}`
  }
  const cardColor = {
    cColor: `${color}`
  }

  return (
    <div className="credit-card" style={background}>
			<p>{type}</p>
			<p>{number}</p>
			<div className="card-data" style={cardColor}>
				<p>Expires: {expirationMonth}/{expirationYear}</p>
				<p>{bank}</p>
				<p>{owner}</p>
			</div>
		</div>
  )
}

export default CreditCard;