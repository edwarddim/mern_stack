import logo from './logo.svg';
import './App.css';
import Main from "./views/Main"
import { 
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';
import Details from './views/Details';
import Edit from './views/Edit';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/books/:id">
            <Details />
          </Route>
          <Route exact path="/books/:id/edit">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;