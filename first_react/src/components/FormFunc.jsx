// IMPORT DEPENDENCIES
import React from 'react'

// CREATE THE FUNCTIONAL COMPONENT
const FormFunc = (props) => {
    const {position, name, age, location, hairColor} = props
    return (
        <fieldset>
            <legend>FormFunc.jsx</legend>
            <h1>This a form component</h1>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Location: {location}</h2>
            <h2>Hair Color: {hairColor}</h2>
            {
                (position) ? <h1>On</h1> : <h1>Off</h1>
            }
        </fieldset>
    )
}


// EXPORT THE FUNCTINOAL COMPONENT
export default FormFunc