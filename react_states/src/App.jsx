import logo from './logo.svg';
import './App.css';
import ClassSwitch from './components/ClassSwitch';
import FunctionSwitch from './components/FunctionSwitch';

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
      <FunctionSwitch user={user} />
      <FunctionSwitch user={user1} />
      <FunctionSwitch user={user2} />




      {/* <ClassSwitch user={user} />
      <ClassSwitch user={user1} />
      <ClassSwitch user={user2} /> */}


    </fieldset>
  );
}

export default App;
