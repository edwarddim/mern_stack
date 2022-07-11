import { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  // STATE
  const [users, setUsers] = useState([])

  const addUser = (newUser) => {
    setUsers([newUser, ...users ])
  }

  return (
    <fieldset>
      <legend>App.js</legend>
      <Form addUser={addUser} />
      <Display allUsers={users} />
    </fieldset>
  );
}

export default App;
