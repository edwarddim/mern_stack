// IMPORT DEPENDENCIES
import React, {Component} from "react"


// CREATE THE COMPONENT
class Display extends Component{
    render(){
        const {firstName, lastName, age, hairColor, clicked} = this.props
        return (
            <fieldset>
                <legend>Display.jsx</legend>
                <h1>First Name: {firstName}</h1>
                <h1>Last Name: {lastName}</h1>
                <h1>Age: {age}</h1>
                <h1>Hair Color: {hairColor}</h1>
                <h1>Number clicked: {clicked}</h1>
            </fieldset>
        )
    }
}

// EXPORT THE COMPONENT
export default Display;