import axios from 'axios'
import React, {useState} from 'react'

const Form = (props) => {

    const {changeSubmitted} = props

    const [title, setTitle] = useState()
    const [pages, setPages] = useState()
    const [author, setAuthor] = useState()


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
                console.log(res.data)
                changeSubmitted()
            })
            .catch(err => console.log(err))
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
        </fieldset>
    )
}

export default Form
