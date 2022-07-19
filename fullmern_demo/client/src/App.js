import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:user_id" element={<Detail />} />
        <Route path="/:user_id/edit" element={<Edit />} />
      </Routes>
    </fieldset>
  );
}

export default App;
