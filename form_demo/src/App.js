import {useState} from "react"
import Display from './components/Display';
import Form from './components/Form'




function App() {

  console.log(process.env.REACT_APP_API_KEY)
  const [loggedUsers, setLoggedUsers] = useState([])

  return (
    <div>
      <fieldset>
        <legend>App.js</legend>
        <Form setLoggedUsers={setLoggedUsers} loggedUsers={loggedUsers} />
        {
          loggedUsers.map((user, i) => <Display key={i} user={user} /> )
        }
      </fieldset>
    </div>
  );
}

export default App;