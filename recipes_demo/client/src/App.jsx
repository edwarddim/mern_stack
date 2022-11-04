import logo from './logo.svg';
import './App.css';

import {Routes, Route} from 'react-router-dom'
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </fieldset>
  );
}

export default App;
