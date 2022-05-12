import React from 'react'

const Display = (props) => {
    // DESTRUCTURE users FROM PROPS
    const { users, removeUser,jobFlip } = props

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
                                <br />
                                <input onClick={(e) => jobFlip(index, e.target.checked)} type="checkbox" checked={jobReady} />
                            </li>
                        )
                    })
                }
            </ul>
        </fieldset>
    )
}

export default Display