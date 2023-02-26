import './App.css';
import IdCard from './components/IdCard.jsx';
import {usersArray as users} from './data/users'


function App() {
  return (
    <div className="App">
      {users.map(elem => {
        return <IdCard key={elem._id} user={elem} />
      })}
    </div>
  );
}

export default App;

