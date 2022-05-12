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

  // CREATE A FUNCTION THAT REMOVES A USER FROM LIST
  const removeUser = (indexToDelete) => {
    const newUsers = users.filter((_, i) => indexToDelete !== i)
    setUsers(newUsers)
  }


  // CREATE A FUNCTION THAT FLIPS JOB READY
  const jobFlip = (searchIndex, jobReadyBool) => {
    // const newUsers = users.map((user, index) =>{
    //   if(searchIndex === index){
    //     user.jobReady = jobReadyBool
    //   }
    //   return user
    // })


    const newUsers = [...users]
    newUsers[searchIndex].jobReady = jobReadyBool

    setUsers(newUsers)

  }

  return (
    <fieldset>
      <legend>App.js</legend>
      <Form addUser={addUser} />
      <Display jobFlip={jobFlip} removeUser={removeUser} users={users} />
    </fieldset>
  );
}

export default App;
