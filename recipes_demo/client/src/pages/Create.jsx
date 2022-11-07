import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate()

    // STATE
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [under30Mins, setUnder30Mins] = useState(false)

    const [errors, setErrors] = useState([]); 

    const createRecipe = (e) => {
        e.preventDefault()
        // CREATE BODY TO SENT OVER TO API
        let body = {
            "name" : name,
            "dateMade" : date,
            "under30Minutes" : under30Mins
        }
        // MAKE A AXIOS REQUEST TO MY API
        axios.post("http://localhost:8000/api/recipes", body)
            .then(res => {
                console.log(res.data)
                setName("")
                setDate("")
                setUnder30Mins(false)
                navigate("/recipes")
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
            // .catch(errors => console.log(errors.response.data.errors))
    }

    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <form onSubmit={createRecipe}>
                <p>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    Date Made:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </p>
                <p>
                    Under 30 mins?
                    <input type="checkbox" checked={under30Mins} onChange={(e) => setUnder30Mins(e.target.checked)} />
                </p>
                <button>Submit</button>
            </form>
            {
                errors.map((error) => <p>{error}</p>)
            }
        </fieldset>
    )
}

export default Create