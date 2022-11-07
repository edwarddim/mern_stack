import {Routes, Route} from 'react-router-dom'
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Edit from './pages/Edit';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/recipes" element={<Dashboard />} />
        <Route path="/recipes/:recipe_id" element={<Details />} />
        <Route path="/recipes/edit/:recipe_id" element={<Edit />} />
      </Routes>
    </fieldset>
  );
}

export default App;
