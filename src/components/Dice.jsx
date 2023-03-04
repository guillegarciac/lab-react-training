import React, { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

const Dice = () => {
  const [diceValue, setDiceValue] = useState(diceEmpty);
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const handleClick = () => {
    setDiceValue(diceEmpty);
    setTimeout(() => {
      setDiceValue(diceImages[Math.floor(Math.random() * diceImages.length)]);
    }, 1000);
  };

  return (
    <div onClick={handleClick}>
      <img width="300px" src={diceValue} alt="dice" />
    </div>
  );
};

export default Dice;