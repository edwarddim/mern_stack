import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Form from './components/Form';
import Display from './components/Display';

function App() {
  // CREATE STATE TO KEEP TRACK OF USERS
  const [users, setUsers] = useState([])

  // CREATE A FUNCTION THAT ADDS TO USERS LIST
  const addUser = (userObj) => {
    setUsers([...users, userObj])
  }

  // CREATE A FUNCTINO THAT REMOVES A USER FROM LIST
  const removeUser = (indexToDelete) => {
    const newUsers = users.filter((_, i) => indexToDelete !== i)
    setUsers(newUsers)
  }

  return (
    <fieldset>
      <legend>App.js</legend>
      <Form addUser={addUser} />
      <Display removeUser={removeUser} users={users} />
    </fieldset>
  );
}

export default App;
