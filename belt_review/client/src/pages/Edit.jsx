import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Edit = () => {
  const { person_id } = useParams()
  const navigate = useNavigate()

  // STATE
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [geoState, setGeoState] = useState("ca")

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/persons/${person_id}`)
      .then(res => {
        console.log(res.data)
        const {name, age, state} = res.data
        setName(name)
        setAge(age)
        setGeoState(state)
      })
      .catch(errors => console.log(errors))
  }, [])

  const updateUser = e => {
    e.preventDefault()
    let updateBody = {
      name,
      age,
      "state" : geoState
    }
    // MAKE PUT REQUEST TO EXPRESS
    axios.put(`http://localhost:8000/api/persons/${person_id}`, updateBody)
      .then( res => navigate("/"))
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

  const deleteHandler = (person_id) => {
    axios.delete(`http://localhost:8000/api/persons/${person_id}`)
      .then(res => navigate("/"))
      .catch(errors => console.log(errors))
  }

  return (
    <fieldset>
      <legend>Edit.jsx</legend>
      <form onSubmit={updateUser}>
        <p>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
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
      <button onClick={() => deleteHandler(person_id)}>Delete</button>
      {
        errors.map((error) => <p>{error}</p>)
      }
    </fieldset>
  )
}

export default Edit