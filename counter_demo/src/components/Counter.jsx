import React, {Component} from "react"


class Counter extends Component {
    // constructor
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            clickTimes:[]
        }
    }

    handleClick = () => {
        // let newArr = [...this.state.clickTimes]
        // newArr.push(new Date())
        this.setState({
            count :this.state.count + this.props.increment,
            clickTimes : [...this.state.clickTimes, new Date()]
        })
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.state.count} people like pinapples</p>
                <button className="btn btn-primary" onClick={this.handleClick}>Click Me!</button>
                <ul>
                    {this.state.clickTimes.map( (date, i) => {
                        return <li key={i}>{date.toString()}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Counter