import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"

const Details = () => {

    const {id} = useParams()
    const [bookState, setBookState] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => setBookState(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {
                (bookState) ?         
                <fieldset>
                    <legend>Details.jsx</legend>
                    <h1>Title: {bookState.title}</h1>
                    <h1>Written By: {bookState.author}</h1>
                    <h1>Pages: {bookState.pages}</h1>
                </fieldset> : <h1>Loading....</h1>
            }
        </>
    )
}

export default Details
