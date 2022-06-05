import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = (props) => {

    const {submitted} = props

    const [books, setBooks] = useState([])

    useEffect(() => {
        // RETRIEVE ALL THE BOOKS FROM DB
        axios.get("http://localhost:8000/api/books")
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    }, [submitted])

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            {
                books.map((book, index) => {
                    return(
                        <div>
                            <Link to={`/books/${book._id}`}>{book.title}</Link>
                            <br />
                            <Link to={`/books/${book._id}/edit`}>Edit {book.title}</Link>
                            <hr />
                        </div>
                    )
                    // return(
                    //     <div>
                    //         <h1>ID: {book._id}</h1>
                    //         <h1>Title: {book.title}</h1>
                    //         <p>Pages: {book.pages}</p>
                    //         <p>Author: {book.author}</p>
                    //         <p>Create At: {book.createdAt}</p>
                    //         <p>Update At: {book.updatedAt}</p>
                    //     </div>
                    // )
                })
            }
        </fieldset>
    )
}

export default Dashboard
