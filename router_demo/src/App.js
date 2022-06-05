import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Navbar from './components/Navbar';
import PokeForm from './components/PokeForm';
import Pokemon from './views/Pokemon';
// import Auth from './views/Auth';
// import Create from './views/Create';
// import Dashboard from './views/Dashboard';
// import Detail from './views/Detail';
// import Edit from './views/Edit';

function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.js</legend>
        <PokeForm />
        <hr />
        <Routes>
          {/* <Route path="/" element={<PokeForm />}>
          </Route> */}
          <Route path="pokemon/:pokemonName" element={<Pokemon />} />
        </Routes>


        {/* <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="recipes/new" element={<Create />} />
          <Route path="recipes/:recipe_id" element={<Detail />} />
          <Route path="recipes/:recipe_id/edit" element={<Edit />} />
        </Routes> */}
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
