import React, {useState} from 'react'
import axios from "axios"

const Form = ({changeRefresh}) => {

    // STATE
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [geoState, setGeoState] = useState("ca")

    const [errors, setErrors] = useState([]); 

    const createUser = e => {
        e.preventDefault()
        // CREATE THE BODY TO SEND TO EXPRESS
        let body = {
            name,
            age, 
            "state" : geoState
        }
        // MAKE THE POST REQUEST TO EXPRESS
        axios.post("http://localhost:8000/api/persons", body)
            .then(res => {
                console.log(res.data)
                setName("")
                setAge("")
                setGeoState("ca")
                setErrors([])
                changeRefresh()
            })
            .catch(err=>{
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
            <legend>Form.jsx</legend>
            <form onSubmit={createUser}>
                <p>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
                </p>
                <p>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </p>
                <p>
                    State:
                    <select value={geoState} onChange={(e) => setGeoState(e.target.value)} >
                        <option value="ca">CA</option>
                        <option value="id">ID</option>
                        <option value="wa">WA</option>
                        <option value="or">OR</option>
                    </select>
                </p>
                <button>Submit</button>
            </form>
            {
                errors.map((error) => <p>{error}</p>)
            }
        </fieldset>
    )
}

export default Form