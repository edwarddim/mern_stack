import React, {Component} from "react"


class Counter extends Component {
    // constructor
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            name : "Edward"
        }
    }

    handleClick = () => {
        this.setState({
            count :this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Click this if you like pineapples</h1>
                <p>{this.state.count} people like pinapples</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default Counter