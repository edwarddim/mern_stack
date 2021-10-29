import React, {useState} from 'react'

const UserList = () => {

    const [users, setUsers] = useState([
        { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
        { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
        { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
        { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
        { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
        { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
        { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
    ])


    return (
        <fieldset>
            <legend>UserList.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return(
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default UserList
