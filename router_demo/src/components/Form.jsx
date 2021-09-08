import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Form = () => {

    const [category, setCategory] = useState()
    const [id, setId] = useState()

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(`/${category}/${id}`)
        // SEND THE USER TO /CATEGORY/ID
        history.push(`/${category}/${id}`)
    }




    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Category:
                    <select name="category" id="" onChange={e => setCategory(e.target.value)}>
                        <option value="">Select category</option>
                        <option value="pokemon">Pokemon</option>
                        <option value="type">Type</option>
                    </select>
                    <input type="number" name="id" id="" onChange={e => setId(e.target.value)} />
                    <button>Get info</button>
                </p>
            </form>
        </fieldset>
    )
}

export default Form
