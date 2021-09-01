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

    clickHandler = () => {
        let click = this.state.clicked
        this.setState({
            "clicked" : ++click
        })
        console.log("you clicked me!!!!")
    }

    render(){
        return(
            <fieldset>
                <legend>Form.jsx</legend>
                <button className="btn btn-primary" onClick={this.clickHandler}>You have clicked me {this.state.clicked} times</button>
            </fieldset>
        )
    }
}

export default Form;