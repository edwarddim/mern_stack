// IMPORT DEPENDENCIES
import React from 'react'

// CREATE THE COMPONENT
const Display = (props) => {

    const {firstName, lastName, age, hairColor} = props

    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <h1>Hello World</h1>
            <h1>First Name: {firstName}</h1>
            <h1>Last Name: {lastName}</h1>
            <h1>Age: {age}</h1>
            <h1>Hair Color: {hairColor}</h1>
        </fieldset>
    )
}
// EXPORT THE COMPONENT
export default Display