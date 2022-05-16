import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"

const Detail = () => {

    // STATE FOR HOLDING ONE BOOK
    const [book, setBook] = useState()

    // GET PATH VARIABLE FROM REACT ROUTER
    const { book_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + book_id)
            .then(res => setBook(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                (book) ?
                <div>
                    <h1>Title: {book.title}</h1>
                    <h1>Pages: {book.pages}</h1>
                    <h1>Author: {book.author}</h1>
                </div> : <h1>Loading....</h1>
            }
        </fieldset>
    )
}

export default Detail