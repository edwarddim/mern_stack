import React from 'react'

const Display = (props) => {
    // DESTRUCTURE
    const {allUsers} = props

    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <ul>
                {
                    allUsers.map((user) => <li>{user.name} - {user.age}</li> )
                }
            </ul>
        </fieldset>
    )
}

export default Display