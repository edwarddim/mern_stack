import React, {useState, useEffect} from "react"
import {Link, navigate} from "@reach/router"
import axios from "axios"


const EditComponent = props =>{

    const {book_id} = props;

    const [input, setInput] = useState("")
    const [validState, setValidState] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + book_id)
            .then(res => setInput(res.data.name))
            .catch(err => console.log(err))
    }, [])

    const submitHandler = e => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/books/"+ book_id, {"name": input})
            .then(res => navigate("/"))
            .catch(err => {
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    } 

    return(
        <div>
            <Link to="/">Home</Link>
            <form onSubmit={submitHandler}>
                <p>
                    Book:
                    <input type="text" onChange={e => setInput(e.target.value)} value={input} name="" id="" />
                    {(validState.name) ? <p>{validState.name}</p>: null}
                </p>
                <Link to="/">Cancel</Link>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default EditComponent