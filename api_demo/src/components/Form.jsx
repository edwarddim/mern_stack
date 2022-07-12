import {useState, useEffect} from 'react'
import axios from 'axios'

const Form = () => {

    // STATE FOR API
    const [api, setAPI]  = useState()
    const [handle, setHandle] = useState()
    // VANILLA JS FETCH METHOD
    // fetch("https://api.github.com/users/edwarddim")
    //     .then(response => response.json() )
    //     .then(finalResponse => setAPI(finalResponse) )

    useEffect(() => {
        // AXIOS
        // axios.get("https://api.github.com/users/t-segars")
        //     .then(finalResponse => setAPI(finalResponse.data)) // SUCCESSFUL
        //     .catch(error => console.log(error)) // UNSUCESSFUL
    },[])

    const submitHandler = (event) => {
        event.preventDefault()
        axios.get("https://api.github.com/users/"+handle)
            .then(finalResponse => setAPI(finalResponse.data)) // SUCCESSFUL
            .catch(error => console.log(error)) // UNSUCESSFUL
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Github Handle:
                    <input onChange={(event) => setHandle(event.target.value)} type="text" name="handle" id="" />
                </p>
                <button>Search</button>
            </form>
            {/* HOT WIRE */}
            {/* {
                api &&
                <>
                    <h1>Name:{api.name}</h1>
                    <h1>ID: {api.id}</h1>
                </>
            } */}
            {/* CONDITIONAL RENDERING */}
            {
                (api) ?
                <>
                    <h1>Name:{api.name}</h1>
                    <h1>ID: {api.id}</h1>   
                </> : <h1>Loading.....</h1>
            }

        </fieldset>
    )
}

export default Form