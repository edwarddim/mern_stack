import React from 'react'
import {Link} from "react-router-dom"

const Dashboard = () => {

    const idArr = [6,5,4,3,23,2]

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <h1>Tags</h1>
            {
                idArr.map((id, idx) => {
                    return(
                        <p key={idx}>
                            <Link to={`/users/${id}`}>Detail</Link>
                        </p>
                    )
                })
            }
        </fieldset>
    )
}

export default Dashboard
