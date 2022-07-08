import React from 'react'

const TableRow = (props) => {
    const {userObj} = props
    return (
        <tr>
            <td>{userObj.id}</td>
            <td>{userObj.name}</td>
            <td>{userObj.age}</td>
        </tr>
    )
}

export default TableRow