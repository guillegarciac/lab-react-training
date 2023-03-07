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
import FacebookV2 from './components/FacebookV2';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';
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
  const [showFacebookV2, setShowFacebookV2] = useState(false);
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleButtonClick = (buttonName) => {
    setShowIdCard(buttonName === "IdCard");
    setShowGreetings(buttonName === "Greetings");
    setShowRandom(buttonName === "Random");
    setShowBoxColor(buttonName === "BoxColor");
    setShowCreditCard(buttonName === "CreditCard");
    setShowRating(buttonName === "Rating");
    setShowDriverCard(buttonName === "Drivers");
    setShowLikeButton(buttonName === "Like Buttons");
    setShowClickablePicture(buttonName === "Clickable Picture");
    setShowCarousel(buttonName === "Image Carousel");
    setShowDice(buttonName === "Dice");
    setShowNumbersTable(buttonName === "List & Keys");
    setShowFacebook(buttonName === "Facebook Profiles");
    setShowFacebookV2(buttonName === "Facebook Profiles V2");
    setShowSignupPage(buttonName === "SignUp");
    setShowColorPicker(buttonName === "ColorPicker")
  };
 
  return (
    <div className="App">
    <h1>Lab React Training</h1>
    <h2>Select a Component</h2>
      <div className="buttons-container">
        <button onClick={() => handleButtonClick("IdCard")}>IdCard</button>
        <button onClick={() => handleButtonClick("Greetings")}>Greetings</button>
        <button onClick={() => handleButtonClick("Random")}>Random</button>
        <button onClick={() => handleButtonClick("BoxColor")}>BoxColor</button>
        <button onClick={() => handleButtonClick("CreditCard")}>CreditCard</button>
        <button onClick={() => handleButtonClick("Rating")}>Rating</button>
        <button onClick={() => handleButtonClick("Drivers")}>Drivers</button>
        <button onClick={() => handleButtonClick("Like Buttons")}>Like Buttons</button>
        <button onClick={() => handleButtonClick("Clickable Picture")}>Clickable Picture</button>
        <button onClick={() => handleButtonClick("Dice")}>Dice</button>
        <button onClick={() => handleButtonClick("Image Carousel")}>Image Carousel</button>
        <button onClick={() => handleButtonClick("List & Keys")}>List & Keys</button>
        <button onClick={() => handleButtonClick("Facebook Profiles")}>Facebook Profiles</button>
        <button onClick={() => handleButtonClick("Facebook Profiles V2")}>Facebook Profiles V2</button>
        <button onClick={() => handleButtonClick("SignUp")}>SignUp</button>
        <button onClick={() => handleButtonClick("ColorPicker")}>ColorPicker</button>
      </div>
      
      <div className="components-container">
        {showIdCard &&
          <div className="component">
          <h1>ID Cards</h1>
            {users.map(elem => {
              return <IdCard key={elem._id} user={elem} />
            })}
          </div>
        }

        {showGreetings &&
          <div className="component">
          <h1>Custom Greetings</h1>
            <>
              <Greetings lang="de">Ludwig</Greetings>
              <Greetings lang="fr">François</Greetings>
            </>
          </div>
        }

        {showRandom &&
          <div className="component">
          <h1>Random Numbers</h1>
            <>
              <Random min={1} max={6} />
              <Random min={1} max={100} />
            </>
          </div>
        }

        {showBoxColor &&
          <div className="component">
          <h1>Boxes with rgb color inside</h1>
            <>
              <BoxColor r={255} g={0} b={0} />
              <BoxColor r={128} g={255} b={0} />
            </>
          </div>
        }

        {showCreditCard &&
          <div className="component">
          <h1>Randon CCs</h1>
            {cards.map(elem => {
              return <CreditCard key={elem._id} card={elem} />
            })}
          </div>
        }

        {showRating &&
          <div className="component">
          <h1>Rating scale component</h1>
            <>
              <Rating>0</Rating>
              <Rating>1.49</Rating>
              <Rating>1.5</Rating>
              <Rating>3</Rating>
              <Rating>4</Rating>
              <Rating>5</Rating>
            </>
          </div>
        }

        {showDriverCard &&
          <div className="component">
          <h1>Uber driver cards</h1>
            {drivers.map(elem => {
              return <DriverCard key={elem._id} driver={elem} />
            })}
          </div>
        }      

        {showLikeButton &&
          <div className="component">
          <h1>Click these buttons</h1>
            <div className="btn-container">
              <LikeButton />
              <LikeButton />
            </div>
          </div>
        }

        {showClickablePicture &&
          <div className="component">
          <h1>Click this guy! Cool uhh</h1>
            <ClickablePicture img='maxence.png' imgClicked='maxence-glasses.png' />
          </div>
        }

        {showDice &&
          <div className="component">
          <h1>Click on the Dice, what's your number?</h1>
            <Dice />
          </div>
        }

        {showCarousel &&
          <div className="component">
          <h1>Click Left & Right to see images</h1>
            <Carousel
              images={[
                'https://randomuser.me/api/portraits/women/1.jpg',
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/men/2.jpg'
              ]}
            />
          </div>
        }

        {showNumbersTable &&
          <div className="component">
          <h1>My Numbers Table</h1>
            <NumbersTable limit={12} />
          </div>
        }

        {showFacebook &&
          <div className="component">
          <h1>Search Profiles by Country</h1>
            <Facebook />
          </div>
        }

        {showFacebookV2 &&
          <div className="component">
          <h1>Search Profiles by Country</h1>
            <FacebookV2 />
          </div>
        }

        {showSignupPage &&
          <div className="component">
          <h1>Sign up my friend</h1>
            <SignupPage />
          </div>
        }

        {showColorPicker &&
          <div className="component">
          <h1>Select a color</h1>
            <RGBColorPicker />
          </div>
        }
      </div>
  </div>
  );
}

export default App;

