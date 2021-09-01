// IMPORT REACT FROM OUR DEPENDENCIES 
import React, {Component} from "react";

// CREATE OUR COMPONENT
class Display extends Component{
    render(){
        const {name, age} = this.props;
        return (
            <fieldset>
                <legend>Display.jsx</legend>
                <h1>Hello {name} {age}</h1>
            </fieldset>
        )
    }
}

// EXPORT OUR COMPONENT
export default Display;