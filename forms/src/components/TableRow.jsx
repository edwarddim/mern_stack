import React from 'react'

const TableRow = ({user}) => {
    const {firstName, lastName, age, tired} = user

    return(
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{tired}</td>
        </tr>
    )
}

export default TableRow