import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"

const Detail = () => {

    const navigate = useNavigate()
    // STATE FOR HOLDING ONE BOOK
    const [book, setBook] = useState()

    // GET PATH VARIABLE FROM REACT ROUTER
    const { book_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + book_id)
            .then(res => setBook(res.data))
            .catch(err => console.log(err))
    }, [])


    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/books/"+id)
          .then(res => navigate("/"))
          .catch()
    }

    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                (book) ?
                <div>
                    <h1>Title: {book.title}</h1>
                    <h1>Pages: {book.pages}</h1>
                    <h1>Author: {book.author}</h1>
                    <Link to={`/${book._id}/edit`}>
                        Edit
                    </Link>
                    <Link to={"/"+book_id+"/edit"}>
                        Edit
                    </Link>
                    <button onClick={(e) => deleteHandler(book._id)}>Delete</button>
                </div> : <h1>Loading....</h1>
            }
        </fieldset>
    )
}

export default Detail