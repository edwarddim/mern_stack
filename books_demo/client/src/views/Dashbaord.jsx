import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Dashbaord = () => {

    const [books, setBooks] = useState([])
    // A FLIP STATE
    const [state, setState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then(res => setBooks(res.data))
            .catch(err => console.log(err))
    }, [state])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then(res => setState(!state))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <ul>
                {
                    books.map((book, idx) => {
                        return(
                            <>
                            <li key={idx}>
                                <Link to={`/books/${book._id}`}>
                                    {book.title}
                                </Link>
                            </li>
                            <button onClick={() => deleteHandler(book._id)}>Delete</button>
                            </>
                        )
                    })
                }
            </ul>
        </fieldset>
    )
}

export default Dashbaord
