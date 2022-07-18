import React from 'react'

const Display = (props) => {

  const { users } = props
  return (
    <fieldset>
      <legend>Display.jsx</legend>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Hair Color</th>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return(
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.hairColor}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </fieldset>
  )
}

export default Display