import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import CombineForm from './components/CombineForm';

function App() {
  return (
    <div className="App">
      {/* <Counter startNum={1} />
      <Counter startNum={2} />
      <Counter startNum={3} /> */}

      <CombineForm />
      <Form />

    </div>
  );
}

export default App;
