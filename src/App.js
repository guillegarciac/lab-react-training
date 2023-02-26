import './App.css';
import IdCard from './components/IdCard.jsx';
import Greetings from './components/Greetings';
import Random from './components/Random';
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
    </div>
  );
}

export default App;

