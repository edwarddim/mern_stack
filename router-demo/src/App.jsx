import logo from './logo.svg';
import './App.css';
import Auth from './views/Auth';
import Dashboard from './views/Dashboard';
import Details from './views/Details';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Navbar />
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/recipes' element={<Dashboard />} />
        <Route path='/recipes/:recipe_id' element={<Details />} />
      </Routes>


    {/* LUKE APIWALKER BREAKDOWN */}
      {/* <Navbar />
      <Routes>
        <Route path='/people/:people_id' element={<Dashboard />} />
        <Route path='/planets/:planet_id' element={<Details />} />
      </Routes> */}
    </fieldset>
  );
}

export default App;
