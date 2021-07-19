import React, {useState} from "react"
import axios from "axios"

const CreateComponent = props => {

    const {submitState, setSubmitState} = props

    const [formState, setFormState] = useState({
        name:"",
        age : 0,
        breed: ""
    })

    const [validState, setValidState] = useState({})



    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/cats", formState)
            .then(res => {
                setFormState({
                    name:"",
                    age : 0,
                    breed: ""
                })
                setSubmitState(!submitState)
            })
            .catch(err => {
                // console.log(err.response.data)
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }


    return(
        <div>
            <h1>Create</h1>
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input type="text" name="name" id="" value={formState.name} onChange={changeHandler} />
                    {(validState.name) ? <p>{validState.name}</p>: null}
                </p>
                <p>
                    Age:
                    <input type="number" defaultValue={0} name="age" id="" value={formState.age} onChange={changeHandler} />
                    {(validState.age) ? <p>{validState.age}</p>: null}
                </p>
                <p>
                    Breed:
                    <input type="text" name="breed" id="" value={formState.breed} onChange={changeHandler} />
                    {(validState.breed) ? <p>{validState.breed}</p>: null}
                </p>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default CreateComponent