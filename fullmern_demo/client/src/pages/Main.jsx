import React from 'react'
import Display from '../components/Display'
import Form from '../components/Form'
import {useState, useEffect} from "react"
import axios from 'axios'

const Main = () => {

    // STATE
    const [users, setUsers] = useState([])

    // REFRESH STATE
    const [submitted, setSubmitted] = useState(false)

    const refresh = () => {
        setSubmitted(!submitted)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/users")
            .then(response => setUsers(response.data))
            .catch(error => console.log(error))
    }, [submitted])

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <Form refresh={refresh} />
            <Display users={users} refresh={refresh} />
        </fieldset>
    )
}

export default Main