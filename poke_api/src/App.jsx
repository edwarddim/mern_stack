import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import {Routes, Route} from "react-router-dom"
import PokemonView from './views/PokemonView';
import AbilityView from './views/AbilityView';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Search />
      <Routes>
        <Route path='/pokemon/:pokemon_id' element={<PokemonView />} />
        <Route path='/ability/:ability_id' element={<AbilityView />} />
      </Routes>
    </fieldset>
  );
}

export default App;
