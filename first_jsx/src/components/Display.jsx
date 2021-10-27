import React, {Component} from "react"

class Display extends Component{
    

    render(){
        console.log(this.props)

        const {clicked, name} = this.props

        return(
            <fieldset>
                <legend>Display.jsx</legend>
                <h1>{clicked}</h1>
                <h1>{name}</h1>
            </fieldset>
        )
    }
}

export default Display