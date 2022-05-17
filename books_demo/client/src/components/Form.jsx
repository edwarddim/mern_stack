import React, {useState} from 'react'
import axios from 'axios'

const Form = (props) => {
    // DECLARE STATE
    const [title, setTitle] = useState("")
    const [pages, setPages] = useState(0)
    const [author, setAuthor] = useState("")

    // STATE FOR BACK-END VALIDATIONS MESSAGES
    const [err, setErr] = useState([])
    const [errorObj, setErrorObj] = useState({})

    // DESTRUCTURE
    const {refresh} = props

    // HANDLER FUNCTIONS
    const createHandler = event => {
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
            .catch(err => {
                console.log("ERROR FROM BACK-END:", err.response.data.errors)

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
            <legend>FormComponent.jsx</legend>
            <form onSubmit={createHandler}>
                <p>
                    Title:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                    {errorObj.title ? <p>{errorObj.title}</p> : null }
                </p>
                <p>
                    Pages:
                    <input type="number" name="pages" onChange={(e) => setPages(e.target.value)} value={pages} />
                    {errorObj.pages ? <p>{errorObj.pages}</p> : null }
                </p>
                <p>
                    Author:
                    <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} />
                    {errorObj.author ? <p>{errorObj.author}</p> : null }
                </p>
                <button>Create</button>
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

export default Form