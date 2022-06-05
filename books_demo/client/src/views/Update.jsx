import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios"

const Update = () => {

    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => setFormState(res.data))
            .catch(err => console.log(err))
    }, [])

    const [formState, setFormState] = useState({
        title : "",
        pages : -1,
        author : ""
    })

    const [validState, setValidState] = useState({})

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/books/${id}`, formState)
            .then(res => {
                history.push(`/books/${id}`)
            })
            .catch(err => {
                // console.log("CATCH: ", err.response.data)
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }

    return (
        <fieldset>
            <legend>Update.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input type="text" name="title" id="" onChange={changeHandler} value={formState.title} />
                    {(validState.title) ? <p style={{color:"red"}}>{validState.title}</p> : null }
                </p>
                <p>
                    Num Pages:
                    <input type="number" name="pages" id="" onChange={changeHandler} value={formState.pages} />
                    {(validState.pages) ? <p style={{color:"red"}}>{validState.pages}</p> : null }
                </p>
                <p>
                    Author:
                    <input type="text" name="author" id="" onChange={changeHandler} value={formState.author} />
                    {(validState.author) ? <p style={{color:"red"}}>{validState.author}</p> : null }
                </p>
                <button type="submit">Update</button>
            </form>
        </fieldset>
    )
}

export default Update
