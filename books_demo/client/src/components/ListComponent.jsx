import React, { useEffect, useState } from "react"
import {Link} from "@reach/router"
import axios from "axios"

const ListComponent = props => {

    const [bookList, setBookList] = useState([])

    // AT THE MOUNT OF LIST COMPONENT
    useEffect(() => {
        // GRAB ALL THE BOOKS IN THE DB
        axios.get("http://localhost:8000/api/books")
            .then(res => setBookList(res.data))
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h1>List Component</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {
                    bookList.map((book, i) => {
                        return(
                            <tr key={i}>
                                <td>{book.name}</td>
                                <td>
                                    <Link to="/">Edit</Link>
                                    <Link to="/">Delete</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )
}
export default ListComponent