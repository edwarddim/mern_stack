import React, {Component} from "react"
import Display from "./Display"

class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
            clicked : 0
        }
    }

    clickHandler = () => {
        console.log("I'm Clicked!!")
        this.setState({
            clicked : this.state.clicked + 1,
            name : "Edward Im"
        })
    }


    render(){
        return(
            <fieldset>
                <legend>Form.jsx</legend>
                <button className="btn btn-primary" onClick={this.clickHandler}>Click Me!!</button>
                <Display name="Edward Im" clicked={this.state.clicked} />
            </fieldset>
        )
    }
}

export default Form