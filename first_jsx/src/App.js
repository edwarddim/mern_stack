import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Test from './components/Test';

function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <Demo name="Edward Im" age={31} interests={[1,2,3,4,5,6]} />
      <Demo name="John Doe" age={33} interests={[1,2,3,4,5,6]} />
      <Test />
    </fieldset>
  );
}

export default App;
