import Main from "./pages/Main";
import Detail from "./pages/Detail";
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:user_id" element={<Detail />} />
      </Routes>
      
    </fieldset>
  );
}

export default App;
