import React from 'react'
import TableRow from './TableRow'

const Dashboard = () => {
    const users = [
        {
            firstName: "Edward",
            lastName: "Im",
            age: 35,
            tired: false
        },
        {
            firstName: "John",
            lastName: "Doe",
            age: 12,
            tired: false
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            age: 332,
            tired: false
        }
    ]
    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last NAme</th>
                        <th>Age</th>
                        <th>Tired</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <TableRow user={user} key={index} /> )
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard