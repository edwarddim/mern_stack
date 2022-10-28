import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

import React, {useState} from 'react'
import Display from './components/Display';

function App() {

  const [allUsers, setAllUsers] = useState([])

  // ADD TO ALL USERS
  const addToAllUsers = (newUser) => {
    setAllUsers([newUser, ...allUsers])
  }

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Form addToAllUsers={addToAllUsers} />
      <Display allUsers={allUsers} />
    </fieldset>
  );
}

export default App;
