import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios"

const Details = () => {

    // REACT ROUTER LOGIC FOR GRABBING THE ID
    const {id} = useParams()
    // REACT ROUTER LOGIC FOR USING HISTORY
    const history = useHistory()

    const [bookState, setBookState] = useState()

    useEffect(() => {
        // MAKE A REQUEST TO THE BACKEND TO RETRIEVE ONE BOOK
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => {
                console.log(res.data)
                setBookState(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then(res => {
                console.log(res.data)
                // SEND THE USER TO THE MAIN VIEW
                history.push("/")
            }) // SUCCESSFUL
            .catch() //UNSUCCESSFUL
    }


    return (
        <fieldset>
            <legend>Details.jsx</legend>
            {
                (bookState) ?
                <div>
                    <h1>ID: {bookState._id}</h1>
                    <h1>Title: {bookState.title}</h1>
                    <p>Pages: {bookState.pages}</p>
                    <p>Author: {bookState.author}</p>
                    <p>Create At: {bookState.createdAt}</p>
                    <p>Update At: {bookState.updatedAt}</p>
                    <button onClick={deleteHandler}>Delete Book</button>
                </div> : <h1>Loading......</h1>
            }
        </fieldset>
    )
}

export default Details
