// import dependencies
import React, { Component } from 'react';

// define class
class ClassSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On",
            age: this.props.user.age
        };
    }
    // HANDLER FUNCTIONS
    clickHandler = () => {
        // CHECK TO SEE THE STATE OF THE POSITION
        if(this.state.position === "On"){
            this.setState({
                position : "Off"
            })
        }
        else{
            this.setState({
                position : "On"
            })
        }
    }

    incrementAge = () => {
        this.setState({
            age : this.state.age + 1
        })
    }
    // EXTRA ANONYMOUS FUNCTION - DON'T WORRY
    // something = function(){
    //     // CHECK TO SEE THE STATE OF THE POSITION
    //     if(this.state.position === "On"){
    //         this.setState({
    //             position : "Off"
    //         })
    //     }
    //     else{
    //         this.setState({
    //             position : "On"
    //         })
    //     }
    // }.bind(this)

    render() {
        return (
            <fieldset>
                <legend>ClassSwitch.jsx</legend>
                <p>The light is currently {this.state.position}</p>
                <p>Age:{this.state.age}</p>
                <button onClick={this.clickHandler}>Flip Switch</button>
                <button onClick={this.incrementAge}>Birthday!!</button>
                <button onClick={() => this.setState({age:this.state.age + 1}) }>Birthday!!</button>
            </fieldset>
        );
    }
}

// export class
export default ClassSwitch;
