import React, {useEffect, useState} from "react";
import axios from "axios"

const Form = props => {

    // const {setLoggedUsers, loggedUsers} = props
    // console.log("FUNCTION BEING PASSED THROUGH PROPS: ",setLoggedUsers)
    // console.log(loggedUsers)

    const [formState, setFormState] = useState({
        email : "",
        password : "",
        confirmPassword : ""
    })

    const [validState, setValidState] = useState({
        email : false,
        password : false,
        confirmPassword : false
    })

    const [submitState, setSubmitState] = useState(false)

    const [lukeState, setLukeState] = useState()

    useEffect( () => {
        // making API calls
        // let response = await fetch("https://swapi.dev/api/people/1")
        // let data  = await response.json()
        // console.log(data)
        // setLukeState(data)

        axios.get("https://swapi.dev/api/people/1")
            .then(resp => { // .then = successful response
                console.log("SUCCESS")
                console.log(resp.data)
                setLukeState(resp.data)
            })
            .catch(err => {  // .catch = unsuccessful response
                console.log("FAILURE")
                console.log(err)
            })

    }, [])

    const handleChange = event => {
        const {name, value} = event.target
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        // setLoggedUsers([...loggedUsers, formState])
        setFormState({
            email : "",
            password : "",
            confirmPassword : ""
        })
        setSubmitState(!submitState)
    }

    return(
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    Email:
                    <input type="text" name="email" value={formState.email} onChange={handleChange} id="" />
                    { (validState.email) ? <p>Your email must be valid pattern</p> : null }
                </p>
                <p>
                    Password:
                    <input type="text" name="password" id="" value={formState.password} onChange={handleChange} />
                    { (validState.password) ? <p>Your password must be longer than 8 chars</p> : null }
                </p>
                <p>
                    Confirm Password:
                    <input type="text" name="confirmPassword" id="" value={formState.confirmPassword} onChange={handleChange} />
                    { (validState.confirmPassword) ? <p>Your password and cofirm password must match</p> : null }
                </p>
                <button type="submit">Login</button>
            </form>
            <div>
                {
                    (lukeState) ? <h1>{lukeState.name}</h1> : <h1>Luke loading....</h1>
                }
            </div>
        </fieldset>
    )
}
export default Form;
