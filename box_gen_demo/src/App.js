import React, { useState } from 'react'
import Form from './components/Form';
import Display from './components/Display';

function App() {
    // STATE TO HOLD ALL THE COLORS USER INPUTED
    const [allColors, setAllColors] = useState([])

    // CREATE A WRAPPER FUNCTION THAT ALLOWS US TO ADD A COLOR
    // TO ALL COLORS
    const addColor = newColor => {
        setAllColors([...allColors, newColor])
    }

    return (
        <fieldset>
            <legend>App.js</legend>
            <Form addColor={addColor} />
            <Display allColors={allColors} />
        </fieldset>
    );
}

export default App;
