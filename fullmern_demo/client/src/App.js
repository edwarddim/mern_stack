import logo from './logo.svg';
import './App.css';
import Main from "./views/Main"
import { 
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;