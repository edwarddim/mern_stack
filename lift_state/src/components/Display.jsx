import React from 'react'

const Display = ({allUsers}) => {
  return (
    <fieldset>
        <legend>Display.jsx</legend>
        <ul>
            {
                allUsers.map((user) => {
                    return(
                        <li>{user.name} - {user.email}</li>
                    )
                })
            }
        </ul>
    </fieldset>
  )
}

export default Display