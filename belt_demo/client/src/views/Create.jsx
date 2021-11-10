import axios from 'axios'
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {

    const history = useHistory()

    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("Form submiited")
        // BUILT OBJECT TO SEND OVER AS BODY
        const postData = {
            firstName,
            lastName
        }
        // MAKE POST REQUREST TO BACK END
        axios.post("http://localhost:8000/api/users/new", postData)
            .then(res => {
                // REDIRECT THE USER TO THE DASHBOARD
                history.push("/")
            })
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
                    First Name:
                    <input type="text" name="" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </p>
                <p>
                    Last Name:
                    <input type="text" name="" value={lastName} onChange={e => setlastName(e.target.value)} />
                </p>
                <button>Create</button>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </fieldset>
    )
}

export default Create
