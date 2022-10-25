import React, { Component } from 'react'

class UserCard extends Component {
    render() {
        // console.log(this.props)
        const {firstName, lastName, age, tired} = this.props.user

        return (
            <fieldset>
                <legend>UserCard.jsx</legend>
                <h1>Full Name: {firstName} {lastName}</h1>
                <h1>Age: {age}</h1>
                <button onClick={() => console.log(firstName)}>Click</button>
                {(tired) ? <h1>Get some sleep</h1> : <h1>Do some code</h1>}
            </fieldset>
        )
    }
}
export default UserCard