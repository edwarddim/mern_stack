import React, { useState } from 'react'
import Display from './components/Display';
import Form from './components/Form';

function App() {

  // STATE
  const [allColors, setAllColors] = useState([])

  // ADD A NEW COLOR
  const addNewColor = (newColor) => {
    setAllColors([newColor, ...allColors])
  }

  // DELETE A COLOR
  const deleteColor = (index) => {
    console.log(index)
  }

  // HANDLER FUNCTIONS

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Form addNewColor={addNewColor} />
      <Display 
        allColors={allColors} 
        deleteColor={deleteColor} 
      />
    </fieldset>
  );
}

export default App;
