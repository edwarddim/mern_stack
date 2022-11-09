import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = ({refresh}) => {

  const [allPersons, setAllPersons] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/persons")
      .then(res => setAllPersons(res.data))
      .catch(errors => console.log(errors))
  }, [refresh])

  return (
    <fieldset>
      <legend>Dashboard.jsx</legend>
      {
        allPersons.map((person) => {
          return(
            <div key={person._id}>
              <h1>
                <Link to={`/persons/${person._id}`}>{person.name}</Link>
              </h1>
              <h1>{person.age}</h1>
              <h2>{person.state}</h2>
              <Link to={`/persons/edit/${person._id}`}>Edit</Link>
            </div>
          )
        })
      }
    </fieldset>
  )
}

export default Dashboard