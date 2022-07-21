import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Edit from './pages/Edit'

function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <Routes>
        <Route path="/recipes" element={<Dashboard />} />
        <Route path="/recipes/new" element={<Create />} />
        <Route path="/recipes/:recipe_id" element={<Detail />} />
        <Route path="/recipes/edit/:recipe_id" element={<Edit />} />
      </Routes>
    </fieldset>
  );
}

export default App;
