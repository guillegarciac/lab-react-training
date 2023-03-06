import React, { useState } from 'react';
import './App.css';
import IdCard from './components/IdCard.jsx';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Carousel from './components/Carousel';
import Dice from './components/Dice';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import { usersArray as users } from './data/users';
import { cardsArray as cards } from './data/cards'
import { driversArray as drivers } from './data/drivers'

function App() {
  const [showIdCard, setShowIdCard] = useState(false);
  const [showGreetings, setShowGreetings] = useState(false);
  const [showRandom, setShowRandom] = useState(false);
  const [showBoxColor, setShowBoxColor] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showDriverCard, setShowDriverCard] = useState(false);
  const [showLikeButton, setShowLikeButton] = useState(false);
  const [showClickablePicture, setShowClickablePicture] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showDice, setShowDice] = useState(false);
  const [showNumbersTable, setShowNumbersTable] = useState(false);
  const [showFacebook, setShowFacebook] = useState(false);
  const [showSignupPage, setShowSignupPage] = useState(false);

  const [activeComponent, setActiveComponent] = useState(null);

  const showComponent = (componentName) => {
    setActiveComponent(componentName);
  }

  const hideComponent = () => {
    setActiveComponent(null);
  }
  
  return (
    <div className="App">
      
      <button onClick={() => setShowIdCard(!showIdCard)}>IdCard</button>
      {showIdCard &&
        users.map(elem => {
          return <IdCard key={elem._id} user={elem} />
        })}
      
      <button onClick={() => setShowGreetings(!showGreetings)}>Greetings</button>
      {showGreetings &&
        <>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </>}
      
      <button onClick={() => setShowRandom(!showRandom)}>Random</button>
      {showRandom &&
        <>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </>}
      
      <button onClick={() => setShowBoxColor(!showBoxColor)}>BoxColor</button>
      {showBoxColor &&
        <>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </>}
      
      <button onClick={() => setShowCreditCard(!showCreditCard)}>CreditCard</button>
      {showCreditCard &&
        cards.map(elem => {
          return <CreditCard key={elem._id} card={elem} />
        })}
      
      <button onClick={() => setShowRating(!showRating)}>Rating</button>
      {showRating &&
        <>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </>}
      
      <button onClick={() => setShowDriverCard(!showDriverCard)}>Drivers</button>
      {showDriverCard &&
        drivers.map(elem => {
          return <DriverCard key={elem._id} driver={elem} />
        })}      
      
      <button onClick={() => setShowLikeButton(!showLikeButton)}>Like Buttons</button>
      {showLikeButton &&
        <div className="btn-container">
          <LikeButton />
          <LikeButton />
        </div>
      }

      <button onClick={() => setShowClickablePicture(!showClickablePicture)}>Clickable Picture</button>
      {showClickablePicture &&
        <ClickablePicture img='maxence.png' imgClicked='maxence-glasses.png' />
      }

      <button onClick={() => setShowDice(!showDice)}>Dice</button>
      {showDice &&
        <Dice />
      }

      <button onClick={() => setShowCarousel(!showCarousel)}>Image Carousel</button>
      {showCarousel &&
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      }

      <button onClick={() => setShowNumbersTable(!showNumbersTable)}>List & Keys</button>
      {showNumbersTable &&
        <NumbersTable limit={12} />
      }

      <button onClick={() => setShowFacebook(!showFacebook)}>Facebook Profiles</button>
      {showFacebook &&
        <Facebook />
      }

      <button onClick={() => setShowSignupPage(!showSignupPage)}>Signup Page</button>
      {showSignupPage &&
        <SignupPage />
      }
    </div>
  );
}

export default App;

