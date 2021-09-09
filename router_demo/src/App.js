import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Auth from "./views/Auth"
import Dashboard from "./views/Dashboard";
import Detail from "./views/Detail";
import Form from "./components/Form"
import Pokemon from "./views/Pokemon";
import Error from "./views/Error"


function App() {

    return (
        <BrowserRouter>
            <fieldset>
                <legend>Pokemon</legend>
                <Form />
                <hr />
                <Switch>
                    <Route path="/pokemon/:poke_id">
                        <Pokemon />
                    </Route>
                    <Route path="/error">
                        <Error />
                    </Route>
                </Switch>
            </fieldset>
        </BrowserRouter>
    );

    // return (
    //     <BrowserRouter>
    //         <fieldset>
    //             <legend>App.js</legend>
    //             <Navbar />
    //             <hr />
    //             <Switch>
    //                 <Route exact path="/">
    //                     <Auth />
    //                 </Route>
    //                 <Route path="/dashboard">
    //                     <Dashboard />
    //                 </Route>
    //                 <Route path="/users/:id">
    //                     <Detail />
    //                 </Route>
    //             </Switch>
    //         </fieldset>
    //     </BrowserRouter>
    // );
}

export default App;
