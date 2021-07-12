import React from "react"

const Display = props => {

    const {user} = props
    console.log(user)

    return(
        <fieldset>
            <legend>Display.jsx</legend>
            <h1>{user.email} has logged in</h1>
        </fieldset>
    )
}
export default Display; 