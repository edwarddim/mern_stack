import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Form from './components/Form'
import React, {useState} from 'react'

function App() {

  // INITITAL STATE
  const [clickState, setClickState] = useState({
    clicked:0,
    name:"Edward Im"
  })

  const clickHandler = () => {
    let {clicked} = clickState
    setClickState({
      ...clickState,
      clicked : clicked+1
    })
  }


  return (
    <fieldset>
      <legend>App.js</legend>
      <Form />
      <Display firstName="Edward" lastName="Im" age={32} hairColor="Black" />
      <button onClick={clickHandler}>Click Me!! {clickState.clicked}</button>
    </fieldset>
  );
}

export default App;
