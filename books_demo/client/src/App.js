import Main from './views/Main';
import Detail from './views/Detail';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Edit from './views/Edit';

function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.js</legend>
        <Routes>
          {/* ROOT ROUTE FOR MAIN */}
          <Route path="/" element={<Main />} />

          {/* /:book_id ROUTE FOR DETAILS*/}
          <Route path="/:book_id" element={<Detail />} />

          {/* ROUTE FOR EDIT PAGE */}
          <Route path='/:book_id/edit' element={<Edit />} />

          
        </Routes>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
