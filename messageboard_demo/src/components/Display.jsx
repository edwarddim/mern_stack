import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {
                props.allMessages.map((msg, index) => <p key={index}>{msg}</p>)
            }
        </fieldset>
    )
}

export default Display
