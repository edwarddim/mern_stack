import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import CombineForm from './components/CombineForm';

function App() {
  return (
      <fieldset>
        <legend>App.js</legend>
        <Counter />
        {/* <Form /> */}
        <CombineForm />
      </fieldset>
  );
}
export default App;