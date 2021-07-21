import {Router} from "@reach/router"
import CreateComponent from "./components/CreateComponent"
import EditComponent from "./components/EditComponent"
import ListComponent from "./components/ListComponent"


function App() {
  return (
    <div style={{padding:"15px"}}>
      <h1>Favorite Books</h1>
      <Router>
        <ListComponent path="/" />
        <CreateComponent path="/new" />
        <EditComponent path="/edit/:book_id" />
      </Router>
    </div>
  );
}

export default App;