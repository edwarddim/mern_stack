import Main from "./pages/Main";
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      
    </fieldset>
  );
}

export default App;
