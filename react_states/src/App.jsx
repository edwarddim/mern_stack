import logo from './logo.svg';
import './App.css';
import ClassSwitch from './components/ClassSwitch';

function App() {

  const user = {
    firstName: "Edward",
    lastName:"Im",
    age:35,
    tired:false
  }
  const user1 = {
    firstName: "John",
    lastName:"Doe",
    age:12,
    tired:false
  }

  const user2 = {
    firstName: "Jane",
    lastName:"Doe",
    age:332,
    tired:false
  }


  return (
    <fieldset>
      <legend>App.jsx</legend>
      <ClassSwitch user={user} />
      <ClassSwitch user={user1} />
      <ClassSwitch user={user2} />


    </fieldset>
  );
}

export default App;
