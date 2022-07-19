import axios from 'axios'
import React from 'react'
import {Link} from "react-router-dom"

const Display = (props) => {

  const {refresh} = props

  const deleteUser = (user_id) => {
    console.log(user_id)
    axios.delete("http://localhost:8000/api/users/"+user_id)
      .then(response => refresh())
      .catch(error => console.log(error))
  }

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
          <td>Action</td>
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
                  <Link to={"/"+user._id+"/edit"}>Edit</Link>
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
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