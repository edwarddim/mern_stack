import BoxDisplay from "./components/BoxDisplay";
import Form from "./components/Form";
import {useState} from 'react';

function App() {

  const [arrState, setArrState] = useState([]);

  const addToArray = (color) => {
    setArrState([...arrState, color])
  }

  return (
    <fieldset>
      <legend>App.js</legend>
      <Form addToArray={addToArray} name="Ed" />
      <BoxDisplay colors={arrState} />
    </fieldset>
  );
}
export default App;
