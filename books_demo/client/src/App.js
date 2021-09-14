import Create from "./views/Create";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashbaord from "./views/Dashbaord";
import Details from "./views/Details";
import Update from "./views/Update";

function App() {

  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.js</legend>
        <Switch>
          <Route exact path="/" >
            <Create />
          </Route>
          <Route exact path="/dashboard">
            <Dashbaord />
          </Route>
          <Route exact path="/books/:id">
            <Details />
          </Route>
          <Route exact path="/books/:id/edit">
            <Update />
          </Route>
        </Switch>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
