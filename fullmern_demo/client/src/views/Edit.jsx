import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios"

const Edit = () => {

    const [title, setTitle] = useState()
    const [pages, setPages] = useState()
    const [author, setAuthor] = useState()

    const history = useHistory()

    const [bookState, setBookState] = useState()
    // REACT ROUTER LOGIC FOR GRABBING THE ID
    const {id} = useParams()

    useEffect(() => {
        // MAKE A REQUEST TO THE BACKEND TO RETRIEVE ONE BOOK
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => {
                console.log(res.data)
                // setBookState(res.data)
                setTitle(res.data.title)
                setPages(res.data.pages)
                setAuthor(res.data.author)
            })
            .catch(err => console.log(err))
    }, [])

    const submitHandler = e =>{
        e.preventDefault()
        const postData = {
            title,
            pages,
            author
        }
        axios.put(`http://localhost:8000/api/books/${id}`, postData)
            .then(res => {
                console.log(res.data)
                history.push(`/books/${id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Edit.jsx</legend>
            {
                (author) ?
                <form onSubmit={submitHandler}>
                    <p>
                        Title:
                        <input type="text" name="" value={title} onChange={e => setTitle(e.target.value)} />
                    </p>
                    <p>
                        Pages:
                        <input type="number" name="" value={pages} onChange={e => setPages(e.target.value)} />
                    </p>
                    <p>
                        Author:
                        <input type="text" name="" value={author} onChange={e => setAuthor(e.target.value)} />
                    </p>
                    <button>Update</button>
                </form> : <h1>Loading....</h1>
            }
        </fieldset>
    )
}

export default Edit
