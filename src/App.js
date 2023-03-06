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
import Carosuel from './components/Carousel';
import Dice from './components/Dice';
import NumbersTable from './components/NumbersTable';
import {usersArray as users} from './data/users';
import {cardsArray as cards} from './data/cards'
import {driversArray as drivers} from './data/drivers'


function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
        {users.map(elem => {
          return <IdCard key={elem._id} user={elem} />
        })}
      <h1>Greetings</h1>  
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      <h1>Random</h1>     
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      <h1>BoxColor</h1>    
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      <h1>CreditCard</h1>
        {cards.map(elem => {
          return <CreditCard key={elem._id} card={elem} />
        })}
      <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      <h1>Drivers</h1>
        {drivers.map(elem => {
          return <DriverCard key={elem._id} driver={elem} />
        })}  
      <h1>Like Buttons</h1>
      <div className="btn-container">
      <LikeButton />  
      <LikeButton/> 
      </div>
      <h1>Clickable Picture</h1>
      <ClickablePicture img='maxence.png' imgClicked='maxence-glasses.png' />   
      <h1>Dice</h1>
      <Dice />   
      <h1>Image Carousel</h1>
      <Carosuel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <h1>List & Keys</h1>
      <NumbersTable limit={12} />
    </div>
  );
}

export default App;

