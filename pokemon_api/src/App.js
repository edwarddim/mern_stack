import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Pokemon from "./pages/Pokemon"
import Item from "./pages/Item"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <Form />
      <Routes>
        <Route path="/pokemon/:pokemon_id" element={<Pokemon />} />
        <Route path="/item/:item_id" element={<Item />} />
      </Routes>
    </fieldset>
  );
}

export default App;
