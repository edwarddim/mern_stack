import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [name, setName] = useState("")
    const [under30min, setUnder30Min] = useState(false)

    const [errors, setErrors] = useState([])

    // GET THE navigate function FROM useNavigate HOOK
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        const recipeObj = {
            name,
            under30min
        }
        axios.post("http://localhost:8000/api/recipes/new", recipeObj)
            .then(res => navigate("/dashboard"))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    Under 30 Minutes?
                    <input type="checkbox" name="under30min" onChange={(e) => setUnder30Min(e.target.checked)}/>
                </p>
                <button>Submit</button>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </fieldset>
    )
}

export default Create