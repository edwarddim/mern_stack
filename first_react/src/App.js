import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Banana from './components/Banana';

function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <Form name="Edward Im" age={31} location="Alhambra" hairColor="black" />
      <Form name="John Doe" age={34} location="LA" hairColor="yellow" />
      <Form name="Jane Doe" age={33} location="LA" hairColor="yellow" />
      <Banana>
        <h1>B</h1>
        <h1>A</h1>
        <h1>N</h1>
        <h1>A</h1>
        <h1>N</h1>
        <h1>A</h1>
      </Banana>
    </fieldset>
  );
}

export default App;