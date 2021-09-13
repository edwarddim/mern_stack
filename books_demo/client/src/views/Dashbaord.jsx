import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Dashbaord = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then(res => setBooks(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <ul>
                {
                    books.map((book, idx) => {
                        return(
                            <li key={idx}>
                                <Link to={`/books/${book._id}`}>
                                    {book.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </fieldset>
    )
}

export default Dashbaord
