import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Auth from "./views/Auth"
import Dashboard from "./views/Dashboard";
import Detail from "./views/Detail";


function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.js</legend>
        <Navbar />
        <hr />
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/users/:id">
            <Detail />
          </Route>
        </Switch>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
