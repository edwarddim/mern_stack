import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Form from "./components/Form"
import Pokemon from './views/Pokemon';
import Type from './views/Type'
import Error from './views/Error'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Form />
                <hr />
                <Switch>
                    <Route exact path="/pokemon/:id">
                        <Pokemon />
                    </Route>
                    <Route exact path="/type/:id">
                        <Type />
                    </Route>
                    <Route exact path="/error">
                        <Error />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
