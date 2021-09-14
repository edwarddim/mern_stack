import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, Link, useHistory } from "react-router-dom"

const Details = () => {

    const {id} = useParams()
    const history = useHistory()
    const [bookState, setBookState] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => setBookState(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then(res => history.push("/dashboard"))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Details.jsx</legend>
            {   
                (bookState) ?         
                <>
                    <h1>Title: {bookState.title}</h1>
                    <h1>Written By: {bookState.author}</h1>
                    <h1>Pages: {bookState.pages}</h1>
                    <Link to={`/books/${bookState._id}/edit`}>Edit</Link>
                    <button onClick={deleteHandler}>Delete</button>
                </> : <h1>Loading....</h1>
            }
        </fieldset> 
    )
}

export default Details
