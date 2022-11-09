import {Routes, Route} from "react-router-dom"
import Main from "./pages/Main";

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </fieldset>
  );
}

export default App;
