import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link, useHistory} from "react-router-dom"


const Dashboard = () => {

    const history = useHistory()

    // STATE FOR HOLDING ALL USERS
    const [users, setUsers] = useState([])

    // RETRIEVE ALL THE USERS ON RENDER
    useEffect(() => {
        axios.get("http://localhost:8000/api/users")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return(
                                <tr>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>
                                        <Link to={`/edit/${user._id}`}>Edit</Link>
                                        <button onClick={ () => history.push(`/edit/${user._id}`) }>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard
