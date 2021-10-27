import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Test from './components/Test';
import Form from './components/Form';

function App() {
  return (
    <div className="container border border-dark">
      <fieldset>
        <legend>App.js</legend>
        {/* <Demo name="Edward Im" age={31} interests={[1,2,3,4,5,6]} />
        <Demo name="John Doe" age={33} interests={[1,2,3,4,5,6]} />
      <Test /> */}
        <Form />
      </fieldset>
    </div>
  );
}

export default App;
