import axios from 'axios'
import React, {useState} from 'react'

const Form = (props) => {

    const {changeSubmitted} = props

    const [title, setTitle] = useState()
    const [pages, setPages] = useState()
    const [author, setAuthor] = useState()

    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 

    const submitHandler = e =>{
        e.preventDefault()
        console.log("Form submitted")
        const postData = {
            title,
            pages,
            author
        }
        axios.post("http://localhost:8000/api/books/new", postData)
            .then(res => {
                console.log(res)
                changeSubmitted()
                setErrors([])
            }) // SUCCESSFUL CREATION OF THE BOOK
            .catch(err => {
                const errorResponse = err.response.data.errors
                console.log(errorResponse)
                const errorArr = []
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            }) // UNSUCCESFUL CREATION OF THE BOOK
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input type="text" name="" onChange={e => setTitle(e.target.value)} />
                </p>
                <p>
                    Pages:
                    <input type="number" name="" onChange={e => setPages(e.target.value)} />
                </p>
                <p>
                    Author:
                    <input type="text" name="" onChange={e => setAuthor(e.target.value)} />
                </p>
                <button>Create</button>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </fieldset>
    )
}

export default Form
