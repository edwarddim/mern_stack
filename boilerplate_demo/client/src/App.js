import {BrowserRouter, Routes, Route} from "react-router-dom"
import Create from "./views/Create";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <fieldset>
      <legend>App.js</legend>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </fieldset>
    </BrowserRouter>
  );
}

export default App;