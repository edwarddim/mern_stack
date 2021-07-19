import React, {useState, useEffect} from "react"
import {navigate} from "@reach/router"
import axios from "axios"

const EditComponent = props => {

    const {cat_id} = props

    const [formState, setFormState] = useState({
        name:"",
        age : 0,
        breed: ""
    })

    const [validState, setValidState] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cats/${cat_id}`)
            .then(res => setFormState(res.data))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/cats/"+ cat_id, formState)
            .then(res => navigate(`/${cat_id}`))
            .catch(err => {
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }

    const deleteHandler = () => {
        // let answer = confirm("Do you want to delete this cat???")
        // console.log(answer)
        axios.delete(`http://localhost:8000/api/cats/${cat_id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Edit</h1>
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
                <button type="submit">Update</button>
            </form>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}
export default EditComponent