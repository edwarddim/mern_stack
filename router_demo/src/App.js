import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Auth from "./views/Auth";
import CreateRecipe from "./views/CreateRecipe";
import Dashboard from "./views/Dashboard";
import Details from "./views/Details";
import NoMatch from "./views/NoMatch";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <hr/>
                <Switch>
                    <Route exact path="/">
                        <Auth />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/recipes/new">
                        <CreateRecipe />
                    </Route>
                    <Route exact path="/recipes/:recipe_id/:watermelon">
                        <Details />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
