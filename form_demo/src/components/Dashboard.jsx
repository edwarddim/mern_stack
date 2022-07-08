import React from 'react'
import TableRow from './TableRow'

const Dashboard = () => {

    const users = [
        {id:1,name:"Edward", age:31},
        {id:2,name:"John Doe", age:34},
        {id:3,name:"Jane Doe", age:36},
    ]

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <TableRow key={user.id} userObj={user} />)
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard