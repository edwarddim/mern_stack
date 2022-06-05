import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'

const Edit = () => {

    const history = useHistory()
    const {id} = useParams()

    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 

    // NEED TO GET THE USERS INFORMATION FROM DB
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then(res => {
                console.log(res.data)
                setFirstName(res.data.firstName)
                setlastName(res.data.lastName)
            })
            .catch(err => console.log(err))
    },[])

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("Form submiited")
        // BUILT OBJECT TO SEND OVER AS BODY
        const postData = {
            firstName,
            lastName
        }
        // MAKE PUT REQUREST TO BACK END
        axios.put(`http://localhost:8000/api/users/${id}`, postData)
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
            <legend>Edit.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    First Name:
                    <input type="text" name="" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </p>
                <p>
                    Last Name:
                    <input type="text" name="" value={lastName}  onChange={e => setlastName(e.target.value)} />
                </p>
                <button>Update</button>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </fieldset>
    )
}

export default Edit
 