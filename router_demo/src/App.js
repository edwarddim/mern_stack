import logo from './logo.svg';
import './App.css';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import New from './pages/New';

function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/:watermelon" element={<Detail />} />
        <Route exact path="/recipes/new" element={<New />} />
      </Routes>
    </fieldset>
  );
}

export default App;
