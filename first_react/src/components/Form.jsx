// IMPORT DEPENDENCIES
import React, {Component} from "react"

// CREATE THE COMPONENT
class Form extends Component{
    render(){
        const {name, age, location, hairColor} = this.props
        return (
            <fieldset>
                <legend>Form.jsx</legend>
                <h1>This a form component</h1>
                <h2>Name: {name}</h2>
                <h2>Age: {age}</h2>
                <h2>Location: {location}</h2>
                <h2>Hair Color: {hairColor}</h2>
            </fieldset>
        )
    }
}

// EXPORT THE COMPONENT
export default Form;