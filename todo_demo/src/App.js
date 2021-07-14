import BoxWrapper from "./components/box_app/BoxWrapper";
import TodoWrapper from "./components/todo_app/TodoWrapper";
import {Router, Link} from "@reach/router"

function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <p>
        <Link to="/box">GO TO BOX</Link>
      </p>
      <p>
        <Link to="/todo">GO TO TODO</Link>
      </p>
      <Router>
        <BoxWrapper path="/box" />
        <TodoWrapper path="/todo" />
      </Router>
    </fieldset>
  );
}
export default App;
