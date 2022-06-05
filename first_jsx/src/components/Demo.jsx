// IMPORT ALL NECESSARY DEPENDENICES
import React, {Component} from "react"

// DEFINE YOUR COMPONENET
class Demo extends Component {    
    render() {        
        return (
            <fieldset>
                <legend>Deom.jsx</legend>
                <h1>Hello {this.props.name}</h1>
                <h2>I am {this.props.age}</h2>
            </fieldset>
        )
    }
}

// EXPORT YOUR COMPONENT
export default Demo