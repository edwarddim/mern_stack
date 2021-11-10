import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Create from './views/Create';
import Edit from './views/Edit';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route excat path="/new">
          <Create />
        </Route>
        <Route exact path="/edit/:id">
          <Edit />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
