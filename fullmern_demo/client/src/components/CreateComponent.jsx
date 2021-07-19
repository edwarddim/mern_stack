import React, {useState} from "react"
import axios from "axios"

const CreateComponent = props => {

    const [formState, setFormState] = useState({
        name:"",
        age : 0,
        breed: ""
    })

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/cats", formState)
            .then(res => console.log(res))
            .catch(err => {
                // console.log(err.response.data)
                const {errors} = err.response.data
                for(let [key, value] of Object.entries(errors)){
                    console.log(key, value.message)
                }
            })
    }


    return(
        <div>
            <h1>Create</h1>
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input type="text" name="name" id="" onChange={changeHandler} />
                </p>
                <p>
                    Age:
                    <input type="number" name="age" id="" onChange={changeHandler} />
                </p>
                <p>
                    Breed:
                    <input type="text" name="breed" id="" onChange={changeHandler} />
                </p>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default CreateComponent