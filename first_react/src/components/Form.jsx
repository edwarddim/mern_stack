// IMPORT REACT FROM OUR DEPENDENCIES 
import React, {Component} from "react";

class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
            clicked : 0,
            name : "Edward"
        }
    }

    /* 
        Arrow functions take the "this" definition of
        from the code that it is in, the Form class
    */
    clickHandler = () => {
        let click = this.state.clicked
        this.setState({
            "clicked" : ++click
        })
        console.log("you clicked me!!!!")
    }

    /* 
        Anonymous functions take the defintion of "this"
        WHEN the function is called not WHERE it was defined.
        And since the function is called in response to the event handler,
        "this" comes up as "undefined"

        For the anonymous function to use the proper "this",
        we must bind "this" to the class when it is defined
    */
    clickHandler2 = function(){
        console.log(this)
        let click = this.state.clicked
        this.setState({
            "clicked" : ++click
        })
        console.log("you clicked me!!!!")
    }.bind(this) // Binding the Form class "this" to the anonymous function

    render(){
        return(
            <fieldset>
                <legend>Form.jsx</legend>
                <button className="btn btn-primary" onClick={this.clickHandler}>You have clicked me {this.state.clicked} times</button>
                <button className="btn btn-primary" onClick={this.clickHandler2}>You have clicked me {this.state.clicked} times</button>
            </fieldset>
        )
    }
}

export default Form;