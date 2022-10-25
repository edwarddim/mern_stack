// IMPORTING YOUR DEPENDENCIES
// IMPORT COMPONENTS
import Form from "./components/Form";
import Hello from "./components/Hello";
import UserCard from "./components/UserCard";

function App() {

  const user = {
    firstName: "Edward",
    lastName:"Im",
    age:32,
    tired:false
  }
  const user1 = {
    firstName: "John",
    lastName:"Doe",
    age:32,
    tired:false
  }

  const user2 = {
    firstName: "Jane",
    lastName:"Doe",
    age:32,
    tired:false
  }

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <UserCard user={user} />
      <UserCard user={user1}  />
      <UserCard user={user2}  />
    </fieldset>
  );
}

export default App;