import React from 'react'

const Display = (props) => {
    // DESTRUCTURE users FROM PROPS
    const { users, removeUser } = props

    const deleteHandler = (e, index) => {
        removeUser(index)
    }
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <ul>

                {
                    users.map((user, index) =>{
                        const {fullName, jobReady, preferredLanguage} = user
                        return(
                            <li>
                                {fullName} - {(jobReady) ? "I am Ready":"I am not"} - 
                                {preferredLanguage}
                                <button onClick={(e) => deleteHandler(e, index)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </fieldset>
    )
}

export default Display