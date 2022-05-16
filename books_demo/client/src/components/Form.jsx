import React, {useState} from 'react'
import axios from 'axios'

const Form = (props) => {
    // DECLARE STATE
    const [title, setTitle] = useState("")
    const [pages, setPages] = useState(0)
    const [author, setAuthor] = useState("")

    // DESTRUCTURE
    const {refresh} = props

    // HANDLER FUNCTIONS
    const submitHandler = event => {
        event.preventDefault()
        // CREATE AN OBJECT WITH THE BOOK INFO
        const bookObj = {
            title,
            pages,
            author
        }
        // MAKE POST REQUEST TO EXPRESS WITH bookObj
        axios.post("http://localhost:8000/api/books/new", bookObj)
            .then(res => {
                refresh()
                setTitle("")
                setPages(0)
                setAuthor("")
            })
            .catch(err => console.log(err))
    }


    return (
        <fieldset>
            <legend>FormComponent.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    Pages:
                    <input type="number" name="pages" onChange={(e) => setPages(e.target.value)} value={pages}/>
                </p>
                <p>
                    Author:
                    <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} />
                </p>
                <button>Create</button>
            </form>
        </fieldset>
    )
}

export default Form