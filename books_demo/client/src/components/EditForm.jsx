import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"



const EditForm = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [pages, setPages] = useState(0)
    const [author, setAuthor] = useState("")

    // STATE FOR BACK-END VALIDATIONS MESSAGES
    const [err, setErr] = useState([])

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
            .catch(err =>{

            })
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
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                const errorObj = {}
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)

                    errorObj[key] = errorResponse[key].message
                }
                // setErrorObj(errorObj)
                console.log("ERROR OBJ: ", errorObj)
                setErr(errorArr)
            })
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
            {
                err.map((errorMessage) => {
                    return(
                        <p>{errorMessage}</p>
                    )
                })
            }
        </fieldset>
    )
}

export default EditForm