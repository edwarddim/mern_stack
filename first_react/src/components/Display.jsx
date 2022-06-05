// IMPORT REACT FROM OUR DEPENDENCIES 
import React, {Component} from "react";
import cat from "../images/cat.jpg"

// CREATE OUR COMPONENT
class Display extends Component{

    constructor(props){
        super(props)
        const {name, age} = this.props
        this.state = {
            name,
            age
        }
    }

    render(){
        return (
            <fieldset>
                <legend>Display.jsx</legend>
                <h1>Hello {this.state.name} {this.state.age}</h1>
                <img src={cat} alt="cat_pic" srcset="" />
            </fieldset>
        )
    }
}
// EXPORT OUR COMPONENT
export default Display;