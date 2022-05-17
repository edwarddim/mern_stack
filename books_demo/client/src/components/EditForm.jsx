import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"



const EditForm = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [pages, setPages] = useState(0)
    const [author, setAuthor] = useState("")

    // GET PATH VARIABLE FROM REACT ROUTER
    const { book_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + book_id)
            .then(res => {
                const {title, pages, author} = res.data
                setTitle(title)
                setPages(pages)
                setAuthor(author)
            })
            .catch(err => console.log(err))
    },[])

    const updateHandler = (event) =>{
        event.preventDefault()
        // CREATE AN OBJECT WITH THE BOOK INFO
        const bookObj = {
            title,
            pages,
            author
        }
        // MAKE PUT REQUEST TO EXPRESS WITH bookObj
        axios.put("http://localhost:8000/api/books/"+book_id, bookObj)
            .then(res => navigate('/') )
            .catch(err => console.log(err))
    }


    return (
        <fieldset>
            <legend>EditForm.jsx</legend>
            <form onSubmit={updateHandler}>
                <p>
                    Title:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    Pages:
                    <input type="number" name="pages" onChange={(e) => setPages(e.target.value)} value={pages} />
                </p>
                <p>
                    Author:
                    <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} />
                </p>
                <button>Update</button>
            </form>
        </fieldset>
    )
}

export default EditForm