import './App.css';
import IdCard from './components/IdCard.jsx';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import {usersArray as users} from './data/users';


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
    </div>
  );
}

export default App;

