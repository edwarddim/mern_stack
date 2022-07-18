import React from 'react'
import {Link} from "react-router-dom"

const Display = (props) => {

  const { users } = props
  return (
    <fieldset>
      <legend>Display.jsx</legend>
      <table>
        <thead>
          <td>ID</td>
          <td>Name</td>
          <td>Age</td>
          <td>Hair Color</td>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return(
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>
                    <Link to={"/"+user._id}>{user.name}</Link>
                  </td>
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