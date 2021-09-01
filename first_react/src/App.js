import './App.css';
import Display from './components/Display';
import Form from './components/Form';

function App() {


  const name = "Edward"
  const age = 30

  return (
    <fieldset>
      <legend>App.js</legend>
      <Display name={name} age={age} />
      <Form />
    </fieldset>
  );
}

export default App;
